import React from 'react'

class AuthorCard extends React.Component {
  render() {
    const {
      author: { name, email, avatar, description }
    } = this.props
    return (
      <div style={styles.body}>
        <div style={styles.imgbox}><img style={styles.img} src={avatar} /></div>
        <div style={styles.infoblock}>
          <div><span style={styles.span}>Автор: </span>{name}</div>
          <div><span style={styles.span}>Email: </span>{email}</div>
          <div><span style={styles.span}>Об авторе: </span>{description}</div>
        </div>
      </div>
    )
  }
}

export default AuthorCard

const styles = {
  body: {
    color: '#333333',
    display: 'flex',
    marginLeft: '20px',
    backgroundColor: '#b4dbea',
    padding: '20px',
    maxHeight: '150px'
  },
  span: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: '14px',
  },
  description: {
    padding: '5px 0',
    textAlign: 'justify'
  },
  imgbox: {
    width: '100px',
    maxHeight: '100px',
    marginRight: '20px',
  },
  img: {
    width: '100%',
    borderRadius: '60px',
  },
  infoblock: {
    flex: '1',
    width: '300px',
    backgroundColor: '#88c2d8',
    padding: '10px',
    maxHeight: '85px'
  }
}