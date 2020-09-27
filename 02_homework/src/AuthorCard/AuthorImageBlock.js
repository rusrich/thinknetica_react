import React from 'react'

const AuthorImageBlock = (props) => {
  return (
    <div style={styles.imgbox}><img style={styles.img} src={props.avatar}/></div>
  )
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