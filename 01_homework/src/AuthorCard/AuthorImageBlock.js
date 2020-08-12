import React from 'react'

class AuthorImageBlock extends React.Component {
  render() {
    return (
      <div style={styles.imgbox}><img style={styles.img} src={this.props.avatar} /></div>
    )
  }
}

export default AuthorImageBlock


const styles = {
  imgbox: {
    width: '100px',
    maxHeight: '100px',
    marginRight: '20px',
  },
  img: {
    width: '100%',
    borderRadius: '60px',
  },
}