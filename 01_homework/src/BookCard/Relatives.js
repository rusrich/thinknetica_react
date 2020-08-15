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
    console.log('render Component')
    const {relativeBooks} = this.state
    return (
      <>
        <BookItems removeFromRelatives={this.removeFromRelatives} relativeBooks={relativeBooks}/>
      </>
    )
  }
}

export default Relatives

const BookItems = ({relativeBooks, removeFromRelatives}) => (
  console.log('render BookItems'),
    relativeBooks.length > 0 ?
      <div className='relative-book'>
        {relativeBooks.slice(0, 3).map((rel) => (
          <RelativeCard rel={rel} key={rel.id} removeFromRelatives={removeFromRelatives}/>
        ))}
      </div>
      : <div className='relative-book'>Похожих книг не найдено</div>
)

const Items = ({children, name}) => (
  <div className={name === 'title' ? 'rel-title' : 'rel-author'}>
    {children}
  </div>
)

const RelativeCard = React.memo(({rel, removeFromRelatives}) => {
  return (
    console.log('render RelativeCard'),
      <div className='rel-item'>
        <Items name='button'>
          <button className='button-hide' onClick={() => removeFromRelatives(rel.id)}>Скрыть</button>
        </Items>
        <Items name='image'><img className='rel-img' src={rel.cover}/></Items>
        <Items name='title' className='rel-title'>{rel.title}</Items>
        <Items name='author' className='rel-author'>{rel.authors[0]}</Items>
      </div>
  )
})