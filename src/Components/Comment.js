import React from 'react'
import './Comment.css'

export default class Comment extends React.Component {

    render() {
      return (
        <div>
            {this.props.comments.map(comment =>
              <div className="col-sm-12" align="center">
                <div className="centerText" class="card">
                    <p className="card-text">{comment.comment}</p>
                </div>
              </div>)}
        </div>
        
      )
    }
  }

