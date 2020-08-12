import React from 'react'
import ReactDOM from 'react-dom'


class DeliveredModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <>
        <button style={s.deliver} onClick={() => this.toggle()}>Условия доставки</button>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={s.overlay}>
              <div style={s.body}>
                <b>Отправка Вашего товара</b>
                <p>Отправка товара осуществляется в течении 24 часов после получения оплаты и отправляются через почтовую службу EMS. После отправки товара вам сообщается код отправления, с помощью которого вы можете проверить статус вашей посылки и узнать где она находится на данный момент времени.</p>
                <button onClick={() => this.toggle()}>Закрыть</button>
              </div>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </>
    )
  }
}

export default DeliveredModal

const s = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.95)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  body: {
    background: 'white',
    padding: '50px 20px'
  },

  deliver: {
    background: '#1ab0d2',
    padding: '5px 10px',
    color: 'white',
    width: '150px',
    margin: '20px 20px 0',
    border: '0',
    height: '35px'
  },
}