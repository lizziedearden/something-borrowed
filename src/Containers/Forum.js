import React from 'react'
import axios from 'axios';
import ForumPostList from '../components/ForumPostList';
import AddForumPost from '../components/AddForumPost';


class Forum extends React.Component{
  constructor (props){
    super(props);
    
    this.state = {
      posts: []
    }

    this.getPosts = this.getPosts.bind(this);
  }
  

  componentDidMount() {
    this.getPosts();
  }

  getPosts(){
      axios.get(`http://localhost:8080/somethingBorrowed/forum/10`)
        .then(res => {
          const posts = res.data;
          this.setState({ posts });
        })
  }

  render() {
      return (
          <div>
            <ForumPostList posts={this.state.posts}/>
            <AddForumPost getPosts = {this.getPosts} />
          </div>
      )
  }
}

export default Forum