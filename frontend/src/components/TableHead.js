import React from 'react'
import OrderCell from './OrderCell'
import { observer } from 'mobx-react'

@observer
class TableHead extends React.Component {
  render() {
    return (
      <tr>
        <OrderCell headField='Name' orderField='name' />
        <OrderCell headField='Text' orderField='text' />
        <OrderCell headField='Article type' orderField='article_type' />
        <OrderCell headField='Updated at' orderField='updated_at' />
        <OrderCell headField='Created at' orderField='created_at' />
      </tr>
    )
  }
}

export default TableHead