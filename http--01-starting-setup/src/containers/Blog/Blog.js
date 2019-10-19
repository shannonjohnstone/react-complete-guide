import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './Blog.css';

import AuthenticationHOC from '../../containers/Authentication/AuthenticationHOC';

const NewPosts = React.lazy(() => import('../../containers/Post/NewPostContainer'));
const Posts = React.lazy(() => import('../Post/PostsContainer'));
const Login = React.lazy(() => import('../Authentication/Login'));
const NotFound = React.lazy(() => import('../NotFound/NotFound'));

const renderSuspense = Component => props => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
    </React.Suspense>
)

const Blog = () => (
    <div className={"Blog"}>
        <Switch>
            <Route path="/new-post" component={renderSuspense(AuthenticationHOC(NewPosts, { authenticated: true }))} />
            <Route path='/posts' component={renderSuspense(Posts)} />  
            <Route path='/login' exact component={renderSuspense(Login)} />
            <Route component={renderSuspense(NotFound)} />
        </Switch>
    </div>
);

export default Blog;