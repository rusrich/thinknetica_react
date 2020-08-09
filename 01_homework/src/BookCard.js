import React from 'react'

import MainBlock from "./BookCard/MainBlock";
import OptionsBlock from "./BookCard/OptionsBlock";
import ImageBlock from "./BookCard/ImageBlock";
import SubscriptionBlock from "./BookCard/SubscriptionBlock";
import BuyBlock from "./BookCard/BuyBlock";

class BookCard extends React.Component {
  render() {
    return (
      <div style={styles.body}>
        <ImageBlock {...this.props}/>
        <div style={styles.infoblock}>
          <SubscriptionBlock {...this.props}/>
          <MainBlock {...this.props}/>
          <OptionsBlock {...this.props}/>
          <BuyBlock />
        </div>
      </div>
    )
  }
}

export default BookCard

const styles = {
  body: {
    color: '#333333',
    display: 'flex'
  },
  span: {
    fontWeight: 'bold',
  },
  imgbox: {
    width: '300px',
    marginRight: '20px',
    padding: '20px',
    border: '1px solid #cccccc'
  },
  img: {
    width: '100%'
  },
  infoblock: {
    width: '500px',
  },
}