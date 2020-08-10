import React from 'react'

class SubscriptionBlock extends React.Component {
  render() {
    return (
      <div style={styles.subsblock}>
        <div style={styles.subs}>Подписчиков: <span style={styles.subsnum}>{this.props.subscribes}</span></div>
        {this.props.subscribes > 29 && <div style={styles.best}>Бестселлер</div>}
      </div>
    )
  }
}

export default SubscriptionBlock


const styles = {
  subsblock: {
    display: 'inline-flex'
  },
  subs: {
    background: '#d21a1a',
    padding: '5px 10px',
    color: 'white',
    width: '130px',
    flex: '1',
  },
  subsnum: {
    fontWeight: 'bold',
  },
  best: {
    background: '#ffa500',
    padding: '5px 10px',
    color: 'white',
    width: '85px',
    margin: '0 20px',
  },
}