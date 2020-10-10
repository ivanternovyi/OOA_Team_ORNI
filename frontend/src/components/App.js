import React from 'react'
import Header from './Header.js'
import Table from './Table'
import { Provider } from 'mobx-react';
import ArticlesStore from '../stores/ArticlesStore';

class App extends React.Component {
  render() {
    return (
      <>
        <Provider articlesStore={(new ArticlesStore())}>
          <Header />
          <Table />
        </Provider>
      </>
    )
  }
}

export default App