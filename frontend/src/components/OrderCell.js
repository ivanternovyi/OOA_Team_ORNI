import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('articlesStore')

@observer
class OrderCell extends React.Component {
  storeObject = this.props.articlesStore

  handleOrderAscClick = () => {
    this.storeObject.setOrder(this.props.orderField, 'ASC')
  }

  handleOrderDescClick = () => {
    this.storeObject.setOrder(this.props.orderField, 'DESC')
  }

  render() {
    return (
      <td>
        <div className='orderField'>
          {this.props.headField}
        </div>
        <div className='orderDirections'>
          <span onClick={() => this.handleOrderAscClick()}>asc</span>
          <span onClick={() => this.handleOrderDescClick()}>desc</span>
        </div>
      </td>
    )
  }
}

export default OrderCell