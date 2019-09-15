import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import { API } from '../../api'

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null
    }

    async componentDidMount() {
        const res = await API.getPosts();

        // limit posts set to store and update with author
        const posts = res.data.slice(0, 4).map(post => ({ ...post, author: 'Dustin' }))

        this.setState({ posts })
    }

    selectPost = (id) => {
        this.setState({ selectedPost: id })
    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                <section className="Posts">
                    {this.state.posts.map(post => <Post key={post.id} {...post} handleSelectPost={this.selectPost} />)}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;