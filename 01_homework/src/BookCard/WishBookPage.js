import React from 'react'

class WishBookPage extends React.Component {
  render() {
    return (
      <div>
        <button style={styles.button}>В корзину</button>
      </div>
    )
  }
}

export default WishBookPage

const styles = {
  button: {
    background: '#34af92',
    color: 'white',
    border: '0',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: '10px 20px',
    marginTop: '20px'
  }
}