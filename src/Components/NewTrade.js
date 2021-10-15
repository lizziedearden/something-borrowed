import React from 'react';
import axios from 'axios';
import './AddComment.css'

class NewTrade extends React.Component {
    constructor (props){
      super(props);

      this.state = {
        userId1: '',
        bookName1: '',
        userId2: '',
        bookName2: ''
      }
    }
    
  
    handleChange = (event) => {
      this.setState( { [event.target.id]: event.target.value } )
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const trade = {
        userId1: this.state.userId1,
        bookName1: this.state.bookName1,
        userId2: this.state.userId2,
        bookName2: this.state.bookName2
      };

      console.log(trade);
  
      axios.put(`http://localhost:8080/somethingBorrowed/trade?userId1=1&bookName1=Harry Potter and the Philosopher's Stone&userId2=2&bookName2=Pride and Prejudice`)
        .then(() => {
          this.setState ({
          userId1: "",
          bookName1: "",
          userId2: "",
          bookName2: ""})
        })
         .then(() => {
           this.props.getBooks();
         }) 
         .then(() => {
            this.props.getAvailableBooks();
         })
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Your User Id:
                <input type="text" className="comment-input" name="userId1" id="userId1" onChange={this.handleChange} />
              </label>
              <label>
                Your Book:
                <input type="text" className="comment-input" name="bookName1" id="bookName1" onChange={this.handleChange} />
              </label>
              <label>
                Their User Id:
                <input type="text" className="comment-input" name="userId2" id="userId2" onChange={this.handleChange} />
              </label>
              <label>
                Their Book:
                <input type="text" className="comment-input" name="bookName2" id="bookName2" onChange={this.handleChange} />
              </label>
              <button className = "comment-submit" type="submit">Trade</button>
            </form>
        </div>
      )
    }
  }
  
  export default NewTrade