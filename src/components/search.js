import React, { Component } from "react"
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './book'

class Search extends Component {

  state = {
    result: []
  }

  searchBook(e){

    let savedBooks = []
    let searchBooks = []

    if (e.target.value !== ""){
      window.stop()
      BooksAPI.search(e.target.value).then((books) =>
        books.length > 0 ? (
        books.map((book) =>
          this.props.books.find((b) => b.id === book.id) ?
            savedBooks.push(this.props.books.find((b) => b.id === book.id)) : searchBooks.push(book)
        ) && (
          this.setState({
            result: savedBooks.concat(searchBooks)
          })
        )):0
      ).catch(function() {
        console.log("unsuccessful fetch");
      })
    }else{
      window.stop()
      this.setState({
        result: []
      })
    }
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={ this.searchBook.bind(this)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          { this.state.result !== undefined &&
              this.state.result.map((book) => (
                  <Book book={ book } key={ book.id } onMoveBook={this.props.onMoveBook}/>
              ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
