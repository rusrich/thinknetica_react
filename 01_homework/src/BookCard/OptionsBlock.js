import React from 'react'

const OptionsBlock = (props) => {
    const {
      options: {pages, language, total, wishtotal, minprice, wishprice}
    } = props
    return (
      <div>
        <div><span style={styles.span}>Страниц: </span>{ pages }</div>
        <div><span style={styles.span}>Язык: </span>{ language }</div>
        <div><span style={styles.span}>Прогресс: </span>{ total/wishtotal * 100 }%</div>
        <div><span style={styles.span}>Минимальная цена: </span>{ minprice } руб.</div>
        <div><span style={styles.span}>Желаемая цена: </span>{ wishprice } руб.</div>
        <div><span style={styles.span}>Всего собрано: </span>{ total } руб.</div>
        <div><span style={styles.span}>Необходимая сумма: </span>{ wishtotal } руб.</div>
      </div>
    )
}

export default OptionsBlock


const styles = {
  span: {
    fontWeight: 'bold',
  }
}