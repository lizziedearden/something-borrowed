import React from 'react'
import BookInventory from '../Components/BookInventory';
import axios from 'axios';


class UserInvent extends React.Component{
  constructor (props){
    super(props);
    
    this.state = {
      usersBooks: [],
      availableBooks: [],
      tradeBooks: []
    }

    this.getUsersBooks = this.getUsersBooks.bind(this);
    this.getAvailableBooks = this.getAvailableBooks(this);
    this.getTradeBooks = this.getTradeBooks(this);
    
  }
  

  componentDidMount() {
    this.getUsersBooks();
    this.getAvailableBooks();
    this.getTradeBooks();
  }

  getUsersBooks(){
      axios.get(`http://localhost:8080/somethingBorrowed/trade/userBooks/${user.Id}`)
        .then(res => {
          const userBooks = res.data;
          this.setState({ userBooks });
        })
  }

  getAvailableBooks(){
      axios.get(`http://localhost:8080/somethingBorrowed/trade/available/${user.Id}`)
      .then(res => {
        const availableBooks = res.data;
        this.setState({ availableBooks });
      })
  }

  getTradeBooks(){
      axios.get(`http://localhost:8080/somethingBorrowed/trade`)
      .then(res => {
          const tradeBooks = res.data;
          this.setState({ tradeBooks });
      })
  }

  render() {
      return (
          <div>
            <BookInventory books={this.state.books}/>
          </div>
      )
  }
}

export default UserInvent