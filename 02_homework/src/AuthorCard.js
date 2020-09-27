import React from 'react'

import AuthorImageBlock from "./AuthorCard/AuthorImageBlock";
import AuthorInfoBlock from "./AuthorCard/AuthorInfoBlock";

const AuthorCard = (props) => {
    const { author: {avatar} } = props
    return (
      <div style={styles.body}>
        <AuthorImageBlock avatar={avatar} />
        <AuthorInfoBlock {...props} />
      </div>
    )
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
  title: {
    fontSize: '14px',
  },
  description: {
    padding: '5px 0',
    textAlign: 'justify'
  },
}