import React from 'react'

const ImageBlock = (props) => {
    return (
      <div style={styles.imgbox}>
        <img style={styles.img} src={props.cover } />
      </div>
    )
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