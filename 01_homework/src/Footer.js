import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer style={s.footer}>
        <div style={s.description}>Все права защищены | {new Date().getFullYear()}</div>
      </footer>
    )
  }
}

export default Footer

const s = {
 footer: {
     padding: 20,
     height: 40,
     background: '#333',
     color: 'white',
     marginTop: 20,
     display: 'block',
 },

  description: {
    color: 'white',
    fontSize: 12,
    lineHeight: '40px',
  }
 }