import React from 'react'
import { Card } from 'react-bootstrap'

function ForumPost(props) {
    return (
        <div>
            <div class="card">
            <div class="card-body">
                <p className="post-forumPost">{props.forumPost}</p>
            </div>
            </div>
        </div>
    )
}

export default ForumPost
