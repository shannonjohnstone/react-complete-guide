import React from 'react'
import Post from '../Post/Post';
import { API } from '../../api'
import withHandleApiError from '../../hoc/withHandleApiError'
import axios from 'axios';

class PostList extends React.Component {
    state = {
        posts: [],
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
            console.log(error, 'error...')
            this.setState({ error: true })
        }
    
    }
    
    async componentDidMount() {
        // limit posts set to store and update with author
        const posts = await this.resolvePostData()
    
        this.setState({ posts })
    }

    render() {
        console.log(this.state, 'this.state')
        return (
            this.state.posts.map(post => <Post key={post.id} {...post} handleSelectPost={this.props.selectPost} />)
        )
    }
}

export default withHandleApiError(PostList, API.getInstance(), 'Something went wrong while trying to look for posts!');