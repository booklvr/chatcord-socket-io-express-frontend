import styled from 'styled-components'
import { Link } from 'react-router-dom'

import React, { useEffect, useState, useRef } from 'react'

import { FaSmile, FaUsers, FaComments, FaPaperPlane } from 'react-icons/fa'

const ChatContainer = styled.div`
  max-width: 1100px;
  background: #fff;
  margin: 30px auto;
  overflow: hidden;
`

const ChatH1 = styled.h1``

const ChatH2 = styled.h2`
  font-size: 20px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
`

const ChatH3 = styled.h3`
  margin-bottom: 15px;
`

const ChatHeaderContainer = styled.div`
  background: var(--dark-color-a);
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ChatLink = styled(Link)``

const ChatSidebar = styled.aside`
  background: var(--dark-color-b);
  color: #fff;
  padding: 20px 20px 60px;
  overflow-y: scroll;
`

const ChatMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

const ChatList = styled.ul`
  list-style: none;
`

const ChatListItem = styled.li`
  padding: 10px 0;
`

const ChatMessagesContainer = styled.div`
  padding: 30px;
  max-height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`

const ChatMeta = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: var(--dark-color-b);
  opacity: 0.7;
  margin-bottom: 7px;
`

const ChatMessage = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  background-color: var(--light-color);
  border-radius: 5px;
`

const ChatTime = styled.span`
  color: #777;
`

const ChatText = styled.p``

const ChatFormContainer = styled.div`
  padding: 20px 30px;
  background-color: var(--dark-color-a);
`

const ChatForm = styled.form`
  display: flex;
`

const ChatFormInput = styled.input`
  font-size: 16px;
  padding: 5px;
  height: 40px;
  flex: 1;
`

const ChatFormSubmitButton = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  background: var(--light-color);
  color: var(--dark-color-a);
  border: 0;
  font-size: 17px;
`

const EndOfChat = styled.div``

const Chatroom = ({ match, socket }) => {
  const messagesEndRef = useRef(null)

  const username = match.params.username
  const room = match.params.room

  console.log('room', room)
  console.log('name', username)

  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    socket.on('message', (data) => {
      //decypt

      let temp = messages
      temp.push({
        userId: data.userId,
        username: data.username,
        text: data.text,
      })
      setMessages([...temp])
    })
    socket.on('newMember', (data) => {
      setUsers(data)
    })
    // socket.on('removeMember', (data) => {
    //   setUsers(data)
    // })
  }, [socket])

  const sendData = () => {
    if (text !== '') {
      //encrypt here

      socket.emit('chat', text)
      setText('')
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  return (
    <>
      <ChatContainer>
        <ChatHeaderContainer>
          <ChatH1>
            <FaSmile /> ChatCord
          </ChatH1>
          <ChatLink to='/'>leave</ChatLink>
        </ChatHeaderContainer>
        <ChatMain>
          <ChatSidebar>
            <ChatH3>
              <FaComments /> Room Name:
            </ChatH3>
            <ChatH2>JavaScript</ChatH2>
            <ChatH3>
              <FaUsers /> Users
            </ChatH3>
            <ChatList>
              {users.map((user) => (
                <ChatListItem key={user}>{user}</ChatListItem>
              ))}
            </ChatList>
          </ChatSidebar>
          <ChatMessagesContainer>
            {messages.map((message, i) => (
              <ChatMessage key={i}>
                <ChatMeta>
                  {message.username} <ChatTime>get time</ChatTime>
                </ChatMeta>
                <ChatText>{message.text}</ChatText>
              </ChatMessage>
            ))}

            <EndOfChat ref={messagesEndRef} />
          </ChatMessagesContainer>
        </ChatMain>
        <ChatFormContainer>
          <ChatForm id='chat-form'>
            <ChatFormInput
              type='text'
              value={text}
              placeholder='Enter Message'
              required
              autocomplete='off'
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendData()
                }
              }}
            />
            <ChatFormSubmitButton onClick={sendData}>
              <FaPaperPlane /> Send
            </ChatFormSubmitButton>
          </ChatForm>
        </ChatFormContainer>
      </ChatContainer>
    </>
  )
}

export default Chatroom
