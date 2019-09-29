import React from 'react'
import { Link } from 'react-router-dom';

import PostPreviewTile from '../../components/Post/PostPreviewTile';
import { API } from '../../api'
import withHandleApiError from '../../hoc/withHandleApiError'

class PreviewPostsContainer extends React.Component {
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
            this.setState({ error: true })
        }

    }

    async componentDidMount() {
        // limit posts set to store and update with author
        const posts = await this.resolvePostData()

        this.setState({ posts })
    }

    render() {
        return (
            <section className="Posts">
                {this.state.posts.map(post => <PostPreviewTile key={post.id} {...post} />)}
            </section>
        )
    }
}

export default withHandleApiError(PreviewPostsContainer, API.getInstance(), 'Something went wrong while trying to look for posts!');