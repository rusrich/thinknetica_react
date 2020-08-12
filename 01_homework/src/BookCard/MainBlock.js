import React from 'react'

const MainBlock = (props) => {
  return (
    <div>
      <div style={styles.title}><h2>{props.title}</h2></div>
      <div style={styles.description}><span style={styles.span}>Описание: </span>{props.description}</div>
    </div>
  )
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