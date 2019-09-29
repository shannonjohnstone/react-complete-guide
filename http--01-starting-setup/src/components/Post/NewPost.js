import React, { Component } from 'react';
import { API } from '../../api';

import './NewPost.css';

const NewPost = (props) => (
    <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input type="text" value={props.title} onChange={(event) => props.handleChangeEvent({ title: event.target.value })} />
        <label>Content</label>
        <textarea rows="4" value={props.content} onChange={(event) => props.handleChangeEvent({ content: event.target.value })} />
        <label>Author</label>
        <select value={props.author} onChange={(event) => props.handleChangeEvent({ author: event.target.value})}>
            <option value="Max">Max</option>
            <option value="Manu">Manu</option>
        </select>
        <button onClick={props.postDataHandler}>Add Post</button>
    </div>
);

export default NewPost;