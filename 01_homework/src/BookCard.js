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
        <ImageBlock cover={this.props.book.cover}/>
        <div style={styles.infoblock}>
          <SubscriptionBlock subscribes={this.props.book.subscribes}/>
          <MainBlock title={this.props.book.title} description={this.props.book.description} />
          <OptionsBlock options={this.props.book.options}/>
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