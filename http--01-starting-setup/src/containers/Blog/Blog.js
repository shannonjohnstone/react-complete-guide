import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import { API } from '../../api'

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null,
        postLimit: 4,
        error: false
    }

    async resolvePostData() {
        const updatePostWithAuthor = (author) => {
            return (post) => ({ ...post, author })
        }

        const limitPosts = (posts) => {
            return posts.slice(0, this.state.postLimit);
        }

        try {
            const res = await API.getPosts();
            return limitPosts(res.data).map(updatePostWithAuthor('Dustin'));
        } catch (error) {
            this.setState({ error: true })
        }

    }

    async componentDidMount() {
        // limit posts set to store and update with author
        const posts = await this.resolvePostData()

        this.setState({ posts })
    }

    selectPost = (id) => {
        this.setState({ selectedPost: id })
    }

    render() {
        return (
            <div>
                <section className="Posts">
                    {!this.state.error ?
                        this.state.posts.map(post => <Post key={post.id} {...post} handleSelectPost={this.selectPost} />) :
                        <p style={{ textAlign: 'center', width: '100%' }}>Something went wrong!</p>
                    }
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