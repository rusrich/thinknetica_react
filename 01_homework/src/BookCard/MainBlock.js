import React from 'react'

class MainBlock extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.title}><h2>{ this.props.title }</h2></div>
        <div style={styles.description}><span style={styles.span}>Описание: </span>{ this.props.description }</div>
      </div>
    )
  }
}

export default MainBlock


const styles = {
  title: {
    fontSize: '14px',
  },
  description: {
    padding: '5px 0',
    textAlign: 'justify'
  }
}