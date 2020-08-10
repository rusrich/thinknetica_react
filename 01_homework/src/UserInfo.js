import React from 'react'
import AuthContext from './AuthContext'

class UserInfo extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {({firstName, lastName, avatarUrl, email}) => (
          <div style={styles.user}>
            <img src={avatarUrl} style={styles.img} alt=""/>
            <div>{firstName + ' ' + lastName}</div>
            <div>{email}</div>
          </div>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default UserInfo

const styles = {
  img: {
    width: '50px',
    height: '50px',
    display: 'block',
    cssFloat: 'right',
    margin: '0 10px'
  },
  user: {
    display: 'block',
    cssFloat: 'right',
    width: '220px',
    padding: '20px',
    textAlign: 'right'
  }
}