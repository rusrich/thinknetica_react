import React from 'react'

class MainBlock extends React.Component {
  render() {
    const {
      book: {title, description}
    } = this.props
    return (
      <div>
        <div style={styles.title}><h2>{ title }</h2></div>
        <div style={styles.description}><span style={styles.span}>Описание: </span>{ description }</div>
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