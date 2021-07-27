import path from 'path'
import http from 'http'
import express from 'express'
import dotenv from 'dotenv'
import { Server } from 'socket.io'

const __dirname = path.resolve()

const app = express()
const server = http.createServer(app)
const io = new Server(server)

dotenv.config({ path: '../.env' })


if (process.env.NODE_ENV === 'production') {
  // app.use(express.static(path.join(__dirname, '/frontend/public')))
  app.use(express.static(path.join(__dirname, '../client', 'build')))

  app.get(
    '*',
    (req, res) =>
      res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    // res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

// run when client connects
io.on('connection', (socket) => {
  console.log('new web socket connection')
})

const PORT = 5000 || process.env.port

server.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}.`))
