import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header style={s.header}>
        <div style={s.title}>Crowdfunding books</div>
        <div style={s.description}>Покупай книги у современных авторов дешевле</div>
        <div></div>
      </header>
    )
  }
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
  }
}