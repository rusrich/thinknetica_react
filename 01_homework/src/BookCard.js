import React from 'react'
import WishBookPage from "./WishBookPage";
import DeliveredModal from "./DeliveredModal";

class BookCard extends React.Component {
  render() {
    const {
      book: { title, description, cover, pages, language, progress, minprice, wishprice, total, wishtotal, subscribes }
    } = this.props

    return (
      <div style={styles.body}>
        <div style={styles.imgbox}>
          <img style={styles.img} src={ cover } />
        </div>
        <div style={styles.infoblock}>
          <div style={styles.subsblock}>
            <div style={styles.subs}>Подписчиков: <span style={styles.subsnum}>{subscribes}</span></div>
            {subscribes > 29 && <div style={styles.best}>Бестселлер</div>}
          </div>
          <div style={styles.title}><h2>{ title }</h2></div>
          <div style={styles.description}><span style={styles.span}>Описание: </span>{ description }</div>
          <div><span style={styles.span}>Страниц: </span>{ pages }</div>
          <div><span style={styles.span}>Язык: </span>{ language }</div>
          <div><span style={styles.span}>Прогресс: </span>{ total/wishtotal * 100 }%</div>
          <div><span style={styles.span}>Минимальная цена: </span>{ minprice } руб.</div>
          <div><span style={styles.span}>Желаемая цена: </span>{ wishprice } руб.</div>
          <div><span style={styles.span}>Всего собрано: </span>{ total } руб.</div>
          <div><span style={styles.span}>Необходимая сумма: </span>{ wishtotal } руб.</div>
          <WishBookPage style={styles.wishBook} wishbook = { this.props.book }/>
          <DeliveredModal />
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
  title: {
    fontSize: '14px',
  },
  description: {
    padding: '5px 0',
    textAlign: 'justify'
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
  subsblock: {
    display: 'inline-flex'
  },
  wishBook: {
    display: 'block',
    marginTop: '40px'
  },
  subs: {
    background: '#d21a1a',
    padding: '5px 10px',
    color: 'white',
    width: '130px',
    flex: '1',
  },
  subsnum: {
    fontWeight: 'bold',
  },
  best: {
    background: '#ffa500',
    padding: '5px 10px',
    color: 'white',
    width: '85px',
    margin: '0 20px',
  },
}