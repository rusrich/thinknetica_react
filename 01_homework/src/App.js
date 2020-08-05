import React from 'react'

import BookCard from "./BookCard"
import AuthorCard from "./AuthorCard"
import WishBookPage from "./WishBookPage";

class App extends React.Component {
  render() {
    return (
      <div style={styles.body}>
        <BookCard style={styles.bookBox} book = { this.props.book } />
        <AuthorCard style={styles.infoBox} author = { this.props.author } />
      </div>
    )
  }
}

export default App

const styles = {
  body: {
    fontFamily: 'Segoe Ui',
    display: 'flex',
  },

  bookBox: {
    flex: '1'
  },
  infoBox: {
    backgroundColor: '#333333',
  }
}