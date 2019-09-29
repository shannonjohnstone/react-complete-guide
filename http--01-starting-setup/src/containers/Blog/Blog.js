import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import PostContainer from '../Post/PostContainer';
import NewPostContainer from '../../containers/Post/NewPostContainer';
import PreviewPostsContainer from '../Post/PreviewPostsContainer';

import './Blog.css';

const Blog = () => (
    <div className={"Blog"}>
        <Route path='/' exact component={PreviewPostsContainer} />
        <Route path="/new-post" component={NewPostContainer} />
        <Route path="/:id" component={PostContainer} />
    </div>
);

export default Blog;