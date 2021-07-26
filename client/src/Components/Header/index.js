import styled from 'styled-components'

import React from 'react'

const HeaderContainer = styled.div`
  background: var(--dark-color-a);
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const index = () => {
  return <HeaderContainer></HeaderContainer>
}

export default index
