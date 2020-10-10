import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('articlesStore')

@observer
class SearchField extends React.Component {
  storeObject = this.props.articlesStore

  handleInputChange = (e) => {
    this.storeObject.setKeyword(e.target.value)
  }

  render() {
    return (
      <div className='searchField'>
        <span>Find article by name or text:</span>
        <input type='text' prompt='Find article by keyword' onChange={this.handleInputChange} />
      </div>
    )
  }
}

export default SearchField