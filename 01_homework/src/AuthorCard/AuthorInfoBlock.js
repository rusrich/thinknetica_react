import React from 'react'

class AuthorInfoBlock extends React.Component {
  render() {
    const {
      author: {name, email, description}
    } = this.props
    return (
      <div style={styles.infoblock}>
        <InfoOptions label='Автор'>{name}</InfoOptions>
        <InfoOptions label='Email'>{email}</InfoOptions>
        <InfoOptions label='Об авторе'>{description}</InfoOptions>
      </div>
    )
  }
}

export default AuthorInfoBlock

const InfoOptions = ({label, children}) => (
  <div>
    <span style={styles.span}>{label}:</span> {children}
  </div>
)

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