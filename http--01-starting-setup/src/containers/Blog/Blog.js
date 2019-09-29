import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import PostList from '../../components/Posts/PostList';

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
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact >
                    <section className="Posts">
                        <PostList selectPost={this.selectPost} />
                    </section>
                    <section>
                        <FullPost id={this.state.selectedPost} />
                    </section>
                </Route>
                <Route>
                    <section>
                        <NewPost />
                    </section>
                </Route>

            </div>
        );
    }
}

export default Blog;