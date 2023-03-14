import React from 'react'
import Logo from "../assests/logo.png"

export const Header = () => {
  return (
    <header>
        <img src= {Logo} alt=""/>
        <a href='/'>Home</a>
    </header>
  )
}
