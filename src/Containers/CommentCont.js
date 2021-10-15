import React from 'react'
import axios from 'axios';
import ForumPostList from '../components/ForumPostList';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Comment from '../components/Comment';
import '../components/CommentCont.css'
import UserInvent from './UserInvent';
import { Link } from "react-router-dom";
import AddComment from '../components/AddComment';


class CommentCont extends React.Component{
  constructor (props){
    super(props);
    
    this.state = {
      comments: []
    }

    this.getComments = this.getComments.bind(this);
  }
  

  componentDidMount() {
    this.getComments();
  }

  getComments(){
      axios.get(`http://localhost:8080/somethingBorrowed/comment`)
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        })
  }

  render() {
      return (
          <div>
            <Navbar />
            <div className="individual-background">

            <Banner />  
                <div class="comment-container">
                    <div className = "big-card">
                        <div className="centerText">
                        <h3 className="bookcard-title">Harry Potter and the Philospher's Stone</h3>
                        <img class="picture" src="https://i2-prod.walesonline.co.uk/incoming/article6890072.ece/ALTERNATES/s615b/hp1.jpg" alt="..."/>
                            <p className="bookcard-author">Author: J.K.Rowling</p>
                            <p className="bookcard-blurb">Life isn’t much fun at number four Privet Drive, at least not for Harry Potter, living under the stairs in a cupboard full of spiders, but all of that is about to change. On the eve of Harry’s eleventh birthday the letters start arriving; letters written in emerald green ink on yellowing parchment with an unmistakable letter H on purple wax seals. Because Harry Potter is no ordinary boy, he is the boy who lived, the wizard whose name everyone in the magical world knows and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin and life for Harry Potter will never be the same again.</p>
                            <p className="bookcard-rating">Rating: 5 stars</p>
                            <p className="bookcard-genre">Genre: childrens</p>
                        </div>
                    </div>
                    <div className="column-container">
                        <div className= "small-card">
                            <h3>What are people saying about this book?</h3>
                            <Comment comments={this.state.comments} />
                            <AddComment getComments={this.getComments} />
                        </div>
                        <div className= "smaller-card">
                            <a className="bbt-button" href="https://www.waterstones.com/book/harry-potter-and-the-philosophers-stone/j-k-rowling/9781408855652" role="button">Buy</a>
                            <Link to="#" className="bbt-button">Borrow</Link>
                            <Link to="/trade" className="bbt-button">Trade</Link> 
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>
      )
  }
}

export default CommentCont