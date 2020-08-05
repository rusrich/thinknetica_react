import React from 'react'
import WishBookPage from "./WishBookPage";

class BookCard extends React.Component {
  render() {
    const {
      book: { title, description, cover, pages, language, progress, minprice, wishprice, total, wishtotal }
    } = this.props

    return (
      <div style={styles.body}>
        <div style={styles.imgbox}>
          <img style={styles.img} src={ cover } />
        </div>
        <div style={styles.infoblock}>
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
        </div>
      </div>
    )
  }
}

export default BookCard

const styles = {
  body: {
    fontFamily: 'Segoe Ui',
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
    maxWidth: '300px',
    marginRight: '20px',
    padding: '20px',
    border: '1px solid #cccccc'
  },
  img: {
    maxWidth: '100%'
  },
  infoblock: {
    flex: '1',
    maxWidth: '500px',
  },
  wishBook: {
    display: 'block',
    marginTop: '40px'
  }
}