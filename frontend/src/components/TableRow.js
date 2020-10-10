import React from 'react'

class TableRow extends React.Component {
  render() {
    const {
      name,
      text,
      article_type,
      updated_at,
      created_at
    } = this.props.article

    return (
      <tr>
        <td>{name}</td>
        <td>{text}</td>
        <td>{article_type}</td>
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}

export default TableRow