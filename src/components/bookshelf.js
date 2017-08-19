import React, { Component } from 'react'
import Book from './book'

class Bookshelf extends Component {

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          { this.props.books.map((book) => (
              <Book book={ book } key={ book.id } onMoveBook={this.props.onMoveBook}/>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
