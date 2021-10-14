import React from 'react'
import BookInventory from '../Components/BookInventory';
import axios from 'axios';
import GenreList from '../Components/GenreList';


class BookInvent extends React.Component{
  constructor (props){
    super(props);
    
    this.state = {
      books: [],
      horrorBooks: [],
      classicBooks: []
    }

    this.getBooks = this.getBooks.bind(this);
    this.getHorror = this.getHorror.bind(this);
    this.getClassics = this.getClassics.bind(this);
  }
  

  componentDidMount() {
    this.getBooks();
    this.getHorror();
    this.getClassics();
  }

  getBooks(){
      axios.get(`http://localhost:8080/somethingBorrowed/book`)
        .then(res => {
          const books = res.data;
          this.setState({ books });
        })
  }
  getHorror(){
      axios.get(`http://localhost:8080/somethingBorrowed/book/filterGenre/horror`)
      .then(res => {
          const horrorBooks = res.data;
          this.setState({ horrorBooks });
      })
  }
  getClassics(){
    axios.get(`http://localhost:8080/somethingBorrowed/book/filterGenre/classic`)
    .then(res => {
        const classicBooks = res.data;
        this.setState({ classicBooks });
    })
}

  render() {
      return (
          <div>
            <BookInventory books={this.state.books}/>
            <GenreList genreBooks={this.state.horrorBooks} />
            <GenreList genreBooks={this.state.classicBooks} />
          </div>
      )
  }
}

export default BookInvent

// get lsit of quotes, get list of books in inventory 
// get list of books in other users inventorys(trade function), get list of books alphabetically
// filter title, filter author, filter genre
// update rating of a book
// get list of comments the user has made on the book
// get list of comments for each book
// delete a comment
// get forum posts
// add a post to the forum
// add book to trade
// update a trade as in do a trade