import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

        // limit posts set to store and update with author
        const posts = res.data.slice(0, 4).map(post => ({ ...post, author: 'Dustin' }))

        this.setState({ posts })
    }
    render() {
        console.log(this.state.posts)
        return (
            <div>
                <section className="Posts">
                    {this.state.posts.map(post => <Post key={post.id} {...post} />)}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;