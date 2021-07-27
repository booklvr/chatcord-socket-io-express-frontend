import styled from 'styled-components'
import { Link } from 'react-router-dom'

import React from 'react'

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

const Chatroom = () => {
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
              <ChatListItem>Brad</ChatListItem>
              <ChatListItem>John</ChatListItem>
              <ChatListItem>Mary</ChatListItem>
              <ChatListItem>Paul</ChatListItem>
              <ChatListItem>Mike</ChatListItem>
            </ChatList>
          </ChatSidebar>
          <ChatMessagesContainer class='chat-messages'>
            <ChatMessage class='message'>
              <ChatMeta class='meta'>
                Brad <ChatTime>9:12pm</ChatTime>
              </ChatMeta>
              <ChatText class='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, repudiandae.
              </ChatText>
            </ChatMessage>
            <ChatMessage class='message'>
              <ChatMeta class='meta'>
                Mary <ChatTime>9:15pm</ChatTime>
              </ChatMeta>
              <ChatText class='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, repudiandae.
              </ChatText>
            </ChatMessage>
          </ChatMessagesContainer>
        </ChatMain>
        <ChatFormContainer class='chat-form-container'>
          <ChatForm id='chat-form'>
            <ChatFormInput
              id='msg'
              type='text'
              placeholder='Enter Message'
              required
              autocomplete='off'
            />
            <ChatFormSubmitButton class='btn'>
              <FaPaperPlane /> Send
            </ChatFormSubmitButton>
          </ChatForm>
        </ChatFormContainer>
      </ChatContainer>
    </>
  )
}

export default Chatroom
