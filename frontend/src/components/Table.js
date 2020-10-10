import React from 'react'
import { observer, inject } from 'mobx-react'
import SearchField from './SearchField'
import TableHead from './TableHead'
import TableRow from './TableRow'

@inject('articlesStore')

@observer
class Table extends React.Component {
  storeObject = this.props.articlesStore

  componentDidMount() {
    this.storeObject.getArticles()
  }

  renderRows = () => (
    this.storeObject.articles.map((article, index) => {
      return (
        <TableRow key={index} article={article} />
      )
    })
  )

  render() {
    return (
      <div>
        <div>
          <SearchField />
        </div>
        <table>
          <thead>
            <TableHead />
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table