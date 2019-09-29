import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import PostContainer from '../Post/PostContainer';
import PostsContainer from '../Post/PostsContainer';
import NewPostContainer from '../../containers/Post/NewPostContainer';
import PreviewPostsContainer from '../Post/PreviewPostsContainer';

import './Blog.css';

const Blog = () => (
    <div className={"Blog"}>
        <Switch>
            <Route path="/new-post" component={NewPostContainer} />
            <Route path='/posts' component={PostsContainer} />
        </Switch>
    </div>
);

export default Blog;