import React from 'react'
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { moreAuthors: 3 }
  }
  toogleMoreAuthors() {
    this.setState({ moreAuthors: this.props.authors.length})
  }
  toogleHideAuthors() {
    this.setState({ moreAuthors: 3})
  }

  render() {
    const authors = this.props.authors
    let button
    if (this.state.moreAuthors == 3 && this.props.authors.length > 3) {
      button = <button style={s.butmore} onClick={() => this.toogleMoreAuthors()}>Все авторы</button>
    } else if (this.state.moreAuthors > 3){
      button = <button style={s.buthide} onClick={() => this.toogleHideAuthors()}>Скрыть</button>
    } else {

    }
    return (
      <div>
        {authors.slice(0,this.state.moreAuthors).map((author, idx) => (
         <div key={idx}>
           <AuthorCard author = {author} />
         </div>
        ))}
        {button}
      </div>
    );
  }
}

export default AuthorsList

const s = {
  butmore: {
    background: '#34af92',
    color: 'white',
    border: '0',
    textTransform: 'uppercase',
    fontSize: 10,
    padding: '10px',
    cursor: 'pointer',
    margin: '0 20px'
  },

  buthide: {
    background: '#c32a2a',
    color: 'white',
    border: '0',
    textTransform: 'uppercase',
    fontSize: 10,
    padding: '10px',
    cursor: 'pointer',
    margin: '0 20px'
  }
}