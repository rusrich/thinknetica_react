import React from 'react'

import AuthorsList from "./AuthorsList"
import Header from "./Header";
import Footer from "./Footer";
import Feedback from "./Feedback";
import BookAppContainer from "./BookAppContainer"
import RelativeAppContainer from "./RelativeAppContainer";

class App extends React.Component {
  render() {
    const { book, authors, relatives } = this.props
    return (
      <>
        <Header />
        <div style={styles.body}>
          <BookAppContainer style={styles.bookBox}/>
          <AuthorsList style={styles.infoBox} authors = { authors } />
        </div>
        <RelativeAppContainer />
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