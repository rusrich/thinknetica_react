import React from 'react'

import AuthorImageBlock from "./AuthorCard/AuthorImageBlock";
import AuthorInfoBlock from "./AuthorCard/AuthorInfoBlock";

class AuthorCard extends React.Component {
  render() {
    return (
      <div style={styles.body}>
        <AuthorImageBlock {...this.props} />
        <AuthorInfoBlock {...this.props} />
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
  title: {
    fontSize: '14px',
  },
  description: {
    padding: '5px 0',
    textAlign: 'justify'
  },
}