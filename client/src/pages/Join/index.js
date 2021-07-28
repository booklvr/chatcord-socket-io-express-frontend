import styled from 'styled-components'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FaSmile } from 'react-icons/fa'

const JoinContainer = styled.div`
  max-width: 500px;
  margin: 80px auto;
  color: #fff;
`

const JoinHeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
  background: var(--dark-color-a);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const JoinHeaderH1 = styled.h1``

const JoinSmileIcon = styled(FaSmile)``

const JoinP = styled.p`
  margin-bottom: 20px;
`

const JoinMain = styled.main`
  padding: 30px 40px;
  background: var(--dark-color-b);
`

const JoinForm = styled.div``

const JoinFormControl = styled.div`
  margin-bottom: 20px;
`

const JoinLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`

const JoinInput = styled.input`
  font-size: 16px;
  padding: 5px;
  height: 40px;
  width: 100%;
`

const Select = styled.select`
  font-size: 16px;
  padding: 5px;
  height: 40px;
  width: 100%;
`

const Option = styled.option``

const SubmitButton = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  margin-top: 20px;
  width: 100%;
  background: var(--light-color);
  color: var(--dark-color-a);
  border: 0;
  font-size: 17px;
`

const Join = ({ socket }) => {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('Javascript')

  const [options] = useState([
    'Javascript',
    'Python',
    'PHP',
    'C#',
    'Ruby',
    'Java',
  ])

  const sendData = () => {
    if (username !== '') {
      socket.emit('joinRoom', { username, room })
    } else {
      alert('username is a must')
      window.location.reload()
    }
  }

  return (
    <>
      <JoinContainer>
        <JoinHeaderContainer>
          <JoinHeaderH1>
            <JoinSmileIcon /> ChatCord
          </JoinHeaderH1>
        </JoinHeaderContainer>
        <JoinMain>
          <JoinForm>
            <JoinFormControl>
              <JoinLabel>Username</JoinLabel>
              <JoinInput
                type='text'
                value={username}
                placeholder='enter username...'
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </JoinFormControl>
            <JoinFormControl>
              <JoinLabel>Room</JoinLabel>
              <Select
                room={room}
                onChange={(e) => setRoom(e.currentTarget.value)}
              >
                {options.map((option) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </JoinFormControl>
            <Link to={`/chat/${room}/${username}`}>
              <SubmitButton onClick={() => sendData(username, room)}>
                Join Chat
              </SubmitButton>
            </Link>
          </JoinForm>
        </JoinMain>
      </JoinContainer>
    </>
  )
}

export default Join
