import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import PostContainer from '../Post/PostContainer';
import NewPostContainer from '../../containers/Post/NewPostContainer';
import PreviewPostsContainer from '../Post/PreviewPostsContainer';

import './Blog.css';

class Blog extends Component {
    state = {
        selectedPost: null,
    }

    selectPost = (id) => {
        this.setState({ selectedPost: id })
    }

    render() {
        return (
            <div className={"Blog"}>
                <Route path='/' exact>
                    <section className="Posts">
                        <PreviewPostsContainer selectPost={this.selectPost} />
                    </section>
                    <section>
                        <PostContainer id={this.state.selectedPost} />
                    </section>
                </Route>
                <Route path="/new-post" component={NewPostContainer} />
            </div>
        );
    }
}

export default Blog;