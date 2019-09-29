import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import PostsContainer from '../Post/PostsContainer';
import NewPostContainer from '../../containers/Post/NewPostContainer';
import NotFound from '../NotFound/NotFound';
import Login from '../Authentication/Login'

import './Blog.css';

const Blog = () => (
    <div className={"Blog"}>
        <Switch>
            <Route path="/new-post" component={NewPostContainer} />
            <Route path='/posts' component={PostsContainer} />
            <Route path='/login' exact component={Login} />
            <Route component={NotFound} />
        </Switch>
    </div>
);

export default Blog;