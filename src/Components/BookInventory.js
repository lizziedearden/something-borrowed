import React from 'react';
import BookCard from './BookCard';
import './BookCard.css'
import Banner from './Banner';
import { Link } from "react-router-dom";
import IndividualBook from './IndividualBook';


export default class BookInventory extends React.Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {this.props.books.map(book =>
              <div className="col-sm-4" align="center">
                <div className="centerText" class="card">
                <img src={book.imageLink} alt="..." class = "pici"/>
                    <h5 className="bookcard-title">{book.title}</h5>
                    <p className="bookcard-author">Author: {book.author}</p>
                    <p className="bookcard-rating">Rating: {book.rating} stars</p>
                    <p className="bookcard-genre">Genre: {book.genre}</p>
                    <Link to="/individualbook"><button type="button" class="btn btn-dark">More...</button></Link> 
                </div>
              </div>)}
          </div>
        </div>
      </div>
      
    )
  }
}

