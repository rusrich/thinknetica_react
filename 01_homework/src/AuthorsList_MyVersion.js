import React from 'react'
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { moreAuthors: true, counts: 3}
  }
  toogleMoreAuthors(n) {
    this.setState({
      moreAuthors: !this.state.moreAuthors,
      counts: n
    })
  }

  render() {
    const authors = this.props.authors
    let button
    if (this.state.moreAuthors == true && authors.length > 3) {
      button = <button style={s.butmore} onClick={() => this.toogleMoreAuthors(this.state.moreAuthors.length)}>Все авторы</button>
    } else if (this.state.moreAuthors == false){
      button = <button style={s.buthide} onClick={() => this.toogleMoreAuthors(3)}>Скрыть</button>
    }
    return (
      <div>
        {authors.slice(0,this.state.counts).map((author, idx) => (
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