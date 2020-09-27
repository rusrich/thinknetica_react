import React from 'react'

class WishBookPage extends React.Component {
  constructor(props) {
    super(props)
    this.priceInputRef = React.createRef()
  }

  componentDidMount() {
    this.priceInputRef.current.focus()
  }

  tooglePrice() {
    alert(`Вы готовы купить книгу за ${this.priceInputRef.current.value} рублей`)
  }

  render() {
    return (
      <div>
        <form className='buy-form' action="">
          <input ref={this.priceInputRef} className='buy-input' placeholder='Цена' type="input"/>
          <button onClick={()  => this.tooglePrice()} style={styles.button}>В корзину</button>
        </form>
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