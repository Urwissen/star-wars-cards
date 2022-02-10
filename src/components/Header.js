import React from 'react'
import logo from "../logo.png"

export const Header = () => {
  return (
    <>
    <img className='header--logo' src={logo} alt="star wars rebell amblem"></img>
    <h1 className='header--title'>Star Wars Cards</h1>
    </>
    
  )
}
