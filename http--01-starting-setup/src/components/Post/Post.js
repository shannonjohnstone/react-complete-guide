import React from 'react'

import('./Post.css');

const Post = (props) => (
    <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <div className="Edit">
            <button className="Delete" onClick={() => this.deletePostHandler(props.id)}>Delete</button>
        </div>
    </div>
)

export default Post;