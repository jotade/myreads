import React, { Component } from "react"
import Header from './header'
import Bookshelf from './bookshelf'
import { Link } from 'react-router-dom'

class BookList extends Component {

  render() {
    return(
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            <Bookshelf title='Currently Reading' books={ this.props.books.filter((book) => book.shelf === 'currentlyReading')} onMoveBook={this.props.onMoveBook}/>
            <Bookshelf title='Want to Read' books={ this.props.books.filter((book) => book.shelf === 'wantToRead')} onMoveBook={this.props.onMoveBook}/>
            <Bookshelf title='Read' books={ this.props.books.filter((book) => book.shelf === 'read')} onMoveBook={this.props.onMoveBook}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList
