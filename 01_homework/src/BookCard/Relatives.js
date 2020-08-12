import React from 'react'

class Relatives extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      relativeBooks: props.relatives
    }
    this.removeFromRelatives = this.removeFromRelatives.bind(this)
  }

  removeFromRelatives(bookId) {
    this.setState((state) => ({
      relativeBooks: state.relativeBooks.filter(item => item.id != bookId)
    }))
  }

  render() {
    const relatives = this.state.relativeBooks
    return (
      <>
        <BookItems removeFromRelatives={this.removeFromRelatives} relatives={relatives}/>
      </>
    )
  }
}

export default Relatives

const BookItems = React.memo(({relatives, removeFromRelatives}) => (
  console.log('render Items'),
    relatives.length > 0 ?
      <div className='relative-book'>
        {relatives.slice(0, 3).map((rel) => (
          <div className='rel-item' key={console.log('render item') || rel.id}>
            <button className='button-hide' onClick={() => removeFromRelatives(rel.id)}>Скрыть</button>
            <div><img className='rel-img' src={rel.cover}/></div>
            <div className='rel-title'>{rel.title}</div>
            <div className='rel-author'>{rel.authors[0]}</div>
          </div>
        ))}
      </div>
      : <div className='relative-book'>Похожих книг не найдено</div>
))