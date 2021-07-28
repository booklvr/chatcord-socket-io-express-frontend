const express = require('express')
const app = express()
const socket = require('socket.io')
const color = require('colors')
const cors = require('cors')
const {
  get_Current_User,
  user_Disconnect,
  join_User,
  get_Current_Users,
} = require('./dummyuser')

app.use(express())

const port = 5000

app.use(cors())

var server = app.listen(
  port,
  console.log(`Server is running on the port no: ${port} `.green)
)

const io = socket(server)

//initializing the socket io connection
io.on('connection', (socket) => {
  //for a new user joining the room
  socket.on('joinRoom', ({ username, room }) => {
    //* create user
    const p_user = join_User(socket.id, username, room)

    console.log(socket.id, '=id')
    socket.join(p_user.room)

    //display a welcome message to the user who have joined a room
    socket.emit('message', {
      userId: p_user.id,
      username: p_user.username,
      text: `Welcome ${p_user.username}`,
    })

    const c_users = get_Current_Users()

    // socket.emit('removeMember', c_users)

    //displays a joined room message to all other room users except that particular user
    socket.broadcast.to(p_user.room).emit('message', {
      userId: p_user.id,
      username: p_user.username,
      text: `${p_user.username} has joined the chat`,
    })
  })

  //user sending message
  socket.on('chat', (text) => {
    //gets the room user and the message sent
    const p_user = get_Current_User(socket.id)

    console.log('fucking user is...', p_user)

    // console.log(p_user.room)

    io.to(p_user.room).emit('message', {
      userId: p_user.id,
      username: p_user.username,
      text: text,
    })
  })

  //when the user exits the room
  socket.on('disconnect', () => {
    //the user is deleted from array of users and a left room message displayed
    const p_user = user_Disconnect(socket.id)

    if (p_user) {
      io.to(p_user.room).emit('message', {
        userId: p_user.id,
        username: p_user.username,
        text: `${p_user.username} has left the chat`,
      })
    }
  })
})

// import path from 'path'
// import http from 'http'
// import express from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import { get_Current_User, join_User, user_Disconnect } from './dummyuser.js'
// import { Server as SocketIOServer } from 'socket.io'

// const __dirname = path.resolve()
// dotenv.config({ path: '../.env' })

// const app = express()
// const server = http.createServer(app)
// const io = new SocketIOServer(server)

// app.use(cors())

// const PORT = 5000 || process.env.port

// server.listen(PORT, () =>
//   console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}.`)
// )

// //initializing the socket io connection
// io.on('connection', (socket) => {
//   //for a new user joining the room
//   socket.on('joinRoom', ({ username, roomname }) => {
//     //* create user
//     const p_user = join_User(socket.id, username, roomname)
//     console.log(socket.id, '=id')
//     socket.join(p_user.room)

//     //display a welcome message to the user who have joined a room
//     socket.emit('message', {
//       userId: p_user.id,
//       username: p_user.username,
//       text: `Welcome ${p_user.username}`,
//     })

//     //displays a joined room message to all other room users except that particular user
//     socket.broadcast.to(p_user.room).emit('message', {
//       userId: p_user.id,
//       username: p_user.username,
//       text: `${p_user.username} has joined the chat`,
//     })
//   })

//   //user sending message
//   socket.on('chat', (text) => {
//     //gets the room user and the message sent
//     const p_user = get_Current_User(socket.id)

//     io.to(p_user.room).emit('message', {
//       userId: p_user.id,
//       username: p_user.username,
//       text: text,
//     })
//   })

//   //when the user exits the room
//   socket.on('disconnect', () => {
//     //the user is deleted from array of users and a left room message displayed
//     const p_user = user_Disconnect(socket.id)

//     if (p_user) {
//       io.to(p_user.room).emit('message', {
//         userId: p_user.id,
//         username: p_user.username,
//         text: `${p_user.username} has left the chat`,
//       })
//     }
//   })
// })
// // if (process.env.NODE_ENV === 'production') {
// //   // app.use(express.static(path.join(__dirname, '/frontend/public')))
// //   app.use(express.static(path.join(__dirname, '../client', 'build')))

// //   app.get(
// //     '*',
// //     (req, res) =>
// //       res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
// //     // res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'))
// //   )
// // } else {
// //   app.get('/', (req, res) => {
// //     res.send('API is running...')
// //   })
// // }
