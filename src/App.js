import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './components/booklist'
import Search from './components/search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }))
  }

  moveBook = (book) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat(book)
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList books={ this.state.books } onMoveBook={this.moveBook}/>
        )}/>
        <Route exact path="/search" render={() => (
          <Search books={ this.state.books } onMoveBook={this.moveBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
