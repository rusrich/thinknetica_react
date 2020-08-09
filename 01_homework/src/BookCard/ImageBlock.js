import React from 'react'

class ImageBlock extends React.Component {
  render() {
    const {
      book: {cover}
    } = this.props
    return (
      <div style={styles.imgbox}>
        <img style={styles.img} src={ cover } />
      </div>
    )
  }
}

export default ImageBlock


const styles = {
  imgbox: {
    width: '300px',
    marginRight: '20px',
    padding: '20px',
    border: '1px solid #cccccc'
  },
  img: {
    width: '100%'
  }
}