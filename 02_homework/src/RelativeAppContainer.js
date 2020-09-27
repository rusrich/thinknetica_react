import React from 'react'
import axios from 'axios'
import Relatives from "./BookCard/Relatives";

const API_TOKEN = 'keybi8dnWgyEZvov5'

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appL7CCv1aEqa94uJ',
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer ${API_TOKEN}`
  }
})


class RelativeAppContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      records: null
    }
  }

  componentDidMount() {
    this._fetchData()
  }

  render() {
    const { relatives } = this.state
    return(
      relatives ?
        <Relatives relatives={relatives} />
        : <div>Данные загружаются...</div>
    )
  }

  _fetchData() {
    httpClient.get('/Books', {
      params: {
        maxRecords: 5,
        view: 'Grid view'
      }
    })
      .then(result => result.data)
      .then(this._mapFromAirtable)
      .then(relatives => {
        this.setState({
          relatives
        })
      })
  }

  _mapFromAirtable(data) {
    return data.records.map(
      record => ({
        id: record.id,
        title: record.fields.title,
        authors: record.fields.authors.split(',')[0],
        cover: record.fields.cover[0].thumbnails.large.url
      })
    )
  }
}

export default RelativeAppContainer