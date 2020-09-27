import React from 'react'

import MainBlock from "./BookCard/MainBlock";
import OptionsBlock from "./BookCard/OptionsBlock";
import ImageBlock from "./BookCard/ImageBlock";
import SubscriptionBlock from "./BookCard/SubscriptionBlock";
import BuyBlock from "./BookCard/BuyBlock";

const BookCard = (props) => {
  return (
    <div style={styles.body}>
      <ImageBlock cover={props.book.cover}/>
      <div style={styles.infoblock}>
        <SubscriptionBlock subscribes={props.book.subscribes}/>
        <MainBlock title={props.book.title} description={props.book.description}/>
        <OptionsBlock options={props.book.options}/>
        <BuyBlock />
      </div>
    </div>
  )
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