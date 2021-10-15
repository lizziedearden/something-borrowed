import React from 'react';
import axios from 'axios';
import './AddComment.css'

class AddTradeBook extends React.Component {
    constructor (props){
      super(props);

      this.state = {
        userId: '1',
        bookName: ''
      }
    }
  
    handleChange = (event) => {
      this.setState( { [event.target.id]: event.target.value } )
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const bookTitle = {
        // userId: this.state.userId,
        // bookId: this.state.bookId,
        bookName: this.state.bookName
      };

      console.log(bookTitle);
  
      axios.post(`http://localhost:8080/somethingBorrowed/trade/addBookToTrade/1?bookName=Dune`)
        .then(() => {
          this.setState ({
            userId: '1',
            bookName: ''})
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(() => {
           this.props.getBooks();
         }) 
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Book Title:
                <input className="comment-input" type="text" name="bookName" id="bookName" onChange={this.handleChange} />
              </label>
              <button className = "comment-submit" type="submit">Add New Book</button>
            </form>
        </div>
      )
    }
  }

  export default AddTradeBook