import React from 'react'
import Logo from "../assests/logo.png"
import "./Header.css";

export const Header = () => {
  return (
    <header>
        <img className="logo" src= {Logo} alt=""/>
        <a href='/'>Home</a>
    </header>
  )
}
