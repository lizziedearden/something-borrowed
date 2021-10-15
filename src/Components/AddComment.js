import React from 'react';
import axios from 'axios';
import './AddComment.css'

class AddComment extends React.Component {
    constructor (props){
      super(props);

      this.state = {
        userId: '1',
        bookId: '1',
        comment: ''
      }
    }
  
    handleChange = (event) => {
      this.setState( { [event.target.id]: event.target.value } )
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const comment = {
        // userId: this.state.userId,
        // bookId: this.state.bookId,
        comment: this.state.comment
      };

      console.log(comment);
  
      axios.post(`http://localhost:8080/somethingBorrowed/comment`, comment)
        .then(() => {
          this.setState ({
            userId: '1',
            bookId: '1',
            comment: ''})
        })
         .then(() => {
           this.props.getComments();
         }) 
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text" name="comment" id="comment" className="comment-input" onChange={this.handleChange} />
              </label>
              <button className = "comment-submit" type="submit">Add Comment</button>
            </form>
        </div>
      )
    }
  }

  export default AddComment