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
    fontFamily: 'Segoe Ui',
    color: '#333333',
    display: 'flex',
    marginLeft: '20px',
    backgroundColor: '#d3e0f1',
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
    maxWidth: '100px',
    maxHeight: '100px',
    marginRight: '20px',
  },
  img: {
    maxWidth: '100%',
    borderRadius: '60px',
  },
  infoblock: {
    flex: '1',
    maxWidth: '300px',
    backgroundColor: '#b2c3da',
    padding: '10px',
    maxHeight: '85px'
  }
}