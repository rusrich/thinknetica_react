import React from 'react'
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { moreAuthors: 3, isOpen: false }
  }
  toggle() {
    this.setState({
      moreAuthors: this.state.count,
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const authors = this.props.authors
    const { isOpen } = this.state
    return (
      <div>
        {authors.slice(0, isOpen ? authors.length : 3).map((author, idx) => (
          <div key={idx}>
            <AuthorCard author = {author} />
          </div>
        ))}
        <ShowHideButton onClick={() => this.toggle()} isOpen={this.state.isOpen} />
      </div>
    );
  }
}
const ShowHideButton = ({ onClick, isOpen }) => (
  <button onClick={onClick} style={ isOpen ? s.buthide : s.butmore }>
    {isOpen ? 'Скрыть' : 'Еще'}
  </button>
)

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