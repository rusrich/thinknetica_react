import React from 'react'
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <header style={s.header}>
      <div style={s.naming}>
        <div style={s.title}>Crowdfunding books</div>
        <div style={s.description}>Покупай книги у современных авторов дешевле</div>
      </div>
      <UserInfo style={s.user}/>
    </header>
  )
}

export default Header

const s = {
  header: {
    padding: 20,
    height: 100,
    // lineHeight: '80px',
    background: '#218292',
    color: 'white',
    marginBottom: 20,
    display: 'block',
  },

  title: {
    color: 'white',
    fontSize: 30,
    lineHeight: '70px',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },

  description: {
    marginTop: '-20px'
  },
  user: {
    display: 'block',
    cssFloat: 'right',
    width: '300px'
  },
  naming: {
    width: '400px',
    display: 'inline-block'
  }
}