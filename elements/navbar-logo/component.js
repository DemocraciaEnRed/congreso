import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLogo = styled.div`
  margin-right:30%;
`

const Logo = styled.div`
  width: 130px;
  height: 98px;
  background-image:url(${'/static/assets/diputados.png'});
  background-size: cover;
  background-position: center;  
  box-sizing: border-box;
`

const NavbarLogo = () => (

  <StyledLogo>
    <Link href='/'>
      <Logo />
    </Link>
  </StyledLogo>

)

export default NavbarLogo