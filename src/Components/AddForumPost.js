import React from 'react';
import axios from 'axios';

class AddForumPost extends React.Component {
    constructor (props){
      super(props);

      this.state = {
        userId: '',
        bookId: '',
        forumPost: ''
      }
    }
  
    handleChange = (event) => {
      this.setState( { [event.target.id]: event.target.value } )
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const post = {
        userId: this.state.userId,
        bookId: this.state.bookId,
        forumPost: this.state.forumPost
      };

      console.log(post);
  
      axios.post(`http://localhost:8080/somethingBorrowed/forum`, post)
        .then(() => {
          this.setState ({
            userId: '',
            bookId: '',
            forumPost: ''})
        })
         .then(() => {
           this.props.getPosts();
         }) 
    }
  
    render() {
      return (
        <div>
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add Post</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form onSubmit={this.handleSubmit}>
              <label>
                User ID:
                <input type="text" name="userId" id="userId" onChange={this.handleChange} />
              </label>
              <label>
                Book ID:
                <input type="text" name="bookId" id="bookId" onChange={this.handleChange} />
              </label>
              <label>
                Post:
                <input type="text" name="forumPost" id="forumPost" onChange={this.handleChange} />
              </label>
              <button type="submit">Add Post</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      )
    }
  }

  export default AddForumPost