import React from 'react';
import ForumPost from './ForumPost';

export default class ForumPostList extends React.Component {

  render() {
    return (
        <div>
          {this.props.posts.map(post =>
            <div align="center">
              <ForumPost forumPost={post.forumPost} />
            </div>)}
        </div>

    )
  }
}