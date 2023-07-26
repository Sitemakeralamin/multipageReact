import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
           <h1>Md Al-Amin</h1>
        </NavLink>
        <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8 rem;
height:10 rem;
background-color:${({theme})=> theme.colors.bg};
display: flex;
justify-content: space-between;
align-items:center;
`;

export default Header
