import React from 'react';
import BookCard from './BookCard';
import './Trade.css'


export default class TradeDropDown extends React.Component {

  render() {
    return (
      <div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Books
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.props.userBooks.map(userBook =>
                    <div className="centerText" class="card">
                        <h5 className="dropdown-item">{userBook.title}</h5>
                    </div>)}
            </div>
        </div>
        
      </div>
      
    )
  }
}