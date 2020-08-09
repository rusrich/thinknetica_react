import React from 'react'

class AuthorInfoBlock extends React.Component {
  render() {
    const {
      author: {name, email, description}
    } = this.props
    return (
      <div style={styles.infoblock}>
        <div><span style={styles.span}>Автор: </span>{name}</div>
        <div><span style={styles.span}>Email: </span>{email}</div>
        <div><span style={styles.span}>Об авторе: </span>{description}</div>
      </div>
    )
  }
}

export default AuthorInfoBlock


const styles = {
  span: {
    fontWeight: 'bold',
  },
  infoblock: {
    flex: '1',
    width: '300px',
    backgroundColor: '#88c2d8',
    padding: '10px',
    maxHeight: '85px'
  }
}