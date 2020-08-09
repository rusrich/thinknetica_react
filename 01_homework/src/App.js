import React from 'react'

import BookCard from "./BookCard"
import AuthorsList from "./AuthorsList"
import WishBookPage from "./WishBookPage";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div style={styles.body}>
          <BookCard style={styles.bookBox} book = { this.props.book } />
          <AuthorsList style={styles.infoBox} authors = { this.props.authors } />
        </div>
        <Footer />
      </>
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