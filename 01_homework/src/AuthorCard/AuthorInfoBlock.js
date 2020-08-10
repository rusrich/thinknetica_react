import React from 'react'

class AuthorInfoBlock extends React.Component {
  render() {
    const {
      author: {name, email, description}
    } = this.props
    return (
      <InfoOptions style={styles.infoblock}>
        <span label='Автор'>{name}</span>
        <span label='Email'>{email}</span>
        <span label='Об авторе'>{description}</span>
      </InfoOptions>
    )
  }
}

export default AuthorInfoBlock

const InfoOptions = ({children}) => (
  <div>
    {children.map((child, idx) => (
      <div key={idx}>
        <div style={styles.span}>{child.props.label}:</div> {child}
      </div>
    ))}
  </div>
)

const styles = {
  span: {
    fontWeight: 'bold',
    display: 'inline-block'
  },
  infoblock: {
    flex: '1',
    width: '300px',
    backgroundColor: '#88c2d8',
    padding: '10px',
    maxHeight: '85px'
  }
}