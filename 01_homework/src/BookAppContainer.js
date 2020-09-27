import React from 'react'
import BookCard from "./BookCard";

import axios from 'axios'

const API_TOKEN = 'keybi8dnWgyEZvov5'

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appL7CCv1aEqa94uJ',
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer ${API_TOKEN}`
  }
})


class BookAppContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      book: null
    }
  }

  componentDidMount() {
    this._fetchData()
  }

  render() {
    const { book } = this.state
    return (

      book ?
        <BookCard book = { book }/>
        : <div>Загружается...</div>
    )
  }

  _fetchData() {
    httpClient.get('/Books/recluw7o4QFyM0ioc', {
      // maxRecords: 3,
      // view: 'Grid view'
    })
      .then(result => result.data)
      .then(this._mapFromAirtable)
      .then(book => {
        this.setState({
          book
        })
      })

  }

  _mapFromAirtable(book) {
    return {
      title: book.fields.title,
      description: book.fields.description,
      cover: book.fields.cover[0].thumbnails.large.url,
      subscribes: book.fields.subscribes,
      options: {
        pages: book.fields.pages,
        language: book.fields.language,
        progress: book.fields.progress,
        minprice: book.fields.minprice,
        wishprice: book.fields.wishprice,
        total: book.fields.total,
        wishtotal: book.fields.wishtotal
      }
    }
  }
}

export default BookAppContainer