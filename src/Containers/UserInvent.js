import React from 'react'
import BookInventory from '../components/BookInventory';
import axios from 'axios';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Trade from '../components/Trade'
import TradeDropDown from '../components/TradeDropDown';
import AddTradeBook from '../components/AddTradeBook';
import NewTrade from '../components/NewTrade';


class UserInvent extends React.Component{
  constructor (props){
    super(props);
    
    this.state = {
      userBooks: [],
      availableBooks: [],
      books: [],
      allBooks:[]
    }

    this.getUsersBooks = this.getUsersBooks.bind(this);
    this.getAvailableBooks = this.getAvailableBooks.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.getAllBooks = this.getAllBooks.bind(this);
  }
  

  componentDidMount() {

    this.getUsersBooks();
    this.getAvailableBooks();
    this.getBooks();
    this.getAllBooks();
  }

  getUsersBooks(){
      axios.get(`http://localhost:8080/somethingBorrowed/trade/userBooks/1`)
        .then(res => {
          const usersBooks = res.data;
          this.setState({ usersBooks });
        })
  }
  getAvailableBooks(){
    axios.get(`http://localhost:8080/somethingBorrowed/trade/available/1`)
        .then(res => {
          const availableBooks = res.data;
          this.setState({ availableBooks });
        })
  }
  getBooks(){
    axios.get(`http://localhost:8080/somethingBorrowed/trade/userBooks/1`)
        .then(res => {
          const books = res.data;
          this.setState({ books });
        })
  }
  getAllBooks(){
    axios.get(`http://localhost:8080/somethingBorrowed/book`)
        .then(res => {
          const allBooks = res.data;
          this.setState({ allBooks });
        })
  }

  render() {
      return (
          <div>
            <Navbar />
            <div className="individual-background">
              <div className="whole-page-container">
            <Banner />  
                <div class="comment-container">
                    <div className = "big-card">
                      <div className = "yourbooks-title">
                      <h1>Your Books</h1>
                      </div>
                      <Trade userBooks={this.state.books} />
                    </div>
                    <div className = "big-card">
                      <h1>Available Books</h1>
                      <Trade userBooks={this.state.availableBooks} />
                    </div>
                  </div>
                </div>
                <h3>Add a New Book to Your Trade Library</h3>
                <AddTradeBook getBooks={this.getBooks}/>
                <h3>Trade Your Book</h3>
                <NewTrade getBooks={this.getBooks} getAvailableBooks={this.getAvailableBooks}/>
            </div>
          </div>

      )
  }
}

export default UserInvent