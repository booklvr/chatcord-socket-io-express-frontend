import styled from 'styled-components'

import React from 'react'

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

const JoinSmileIcon = styled(FaSmile)`

`

const JoinP = styled.p`
  margin-bottom: 20px;
`;

const JoinMain = styled.main`
  padding: 30px 40px;
  background: var(--dark-color-b);
`



const JoinForm = styled.form``

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

const Option = styled.option`

`

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

const Join = () => {
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
                name='username'
                placeholder='enter username...'
                required
              />
            </JoinFormControl>
            <JoinFormControl>
              <JoinLabel>Room</JoinLabel>
              <Select name='room'>
                <Option value='Javascript'>Javascript</Option>
                <Option value='Python'>Python</Option>
                <Option value='PHP'>PHP</Option>
                <Option value='C#'>C#</Option>
                <Option value='Ruby'>Ruby</Option>
                <Option value='Java'>Java</Option>
              </Select>
            </JoinFormControl>
            <SubmitButton type='submit'>Join Chat</SubmitButton>
          </JoinForm>
        </JoinMain>
      </JoinContainer>
    </>
  )
}

export default Join
