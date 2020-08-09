import React from 'react'

import BookCard from "./BookCard"
import AuthorsList from "./AuthorsList"
import Header from "./Header";
import Footer from "./Footer";
import Feedback from "./Feedback";

class App extends React.Component {
  render() {
    const { book, authors } = this.props
    return (
      <>
        <Header />
        <div style={styles.body}>
          <BookCard style={styles.bookBox} book = { book } />
          <AuthorsList style={styles.infoBox} authors = { authors } />
        </div>
        <Feedback style={styles.feedback} />
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
  },
  feedback: {
    position: 'relative',
    display: 'block',
    marginTop: '20px',
  }
}