import React from 'react'

import BookCard from "./BookCard"
import AuthorsList from "./AuthorsList"
import Header from "./Header";
import Footer from "./Footer";
import Feedback from "./Feedback";
import Relatives from "./BookCard/Relatives";

class App extends React.Component {
  render() {
    const { book, authors, relatives } = this.props
    return (
      <>
        <Header />
        <div style={styles.body}>
          <BookCard style={styles.bookBox} book = { book }/>
          <AuthorsList style={styles.infoBox} authors = { authors } />
        </div>
        <Relatives relatives={relatives} />
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