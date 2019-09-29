import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import PostsContainer from '../Post/PostsContainer';
import NotFound from '../NotFound/NotFound';
import Login from '../Authentication/Login'
import AuthenticationContainer from '../../containers/Authentication/Authentication';
import asyncComponent from '../../hoc/asyncComponent';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => import('../../containers/Post/NewPostContainer'))

const Blog = () => (
    <div className={"Blog"}>
        <Switch>
            <Route path="/new-post">
                <AuthenticationContainer authenticated={true}>
                    <Route path="/new-post" component={AsyncNewPost} />
                </AuthenticationContainer>
            </Route>
            <Route path='/posts' component={PostsContainer} />
            <Route path='/login' exact component={Login} />
            <Route component={NotFound} />
        </Switch>
    </div>
);

export default Blog;