import React from 'react';
import './Trade.css'


export default class Trade extends React.Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {this.props.userBooks.map(userBook =>
              <div className="col-sm-6" align="center">
                <div className="centerText" >
                    <img src={userBook.imageLink} alt="..." className = "pic"/>
                    <h5 className="card-title">{userBook.title}</h5>
                    <p className="card-author">Author: {userBook.author}</p>
                    <p className="card-rating">Rating: {userBook.rating} stars</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      
    )
  }
}