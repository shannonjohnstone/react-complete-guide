import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import withHandleApiError from '../../hoc/withHandleApiError'

import { API } from '../../api'
import post from '../../components/Post/PostPreviewTile';

class PostContainer extends Component {
    state = {
        post: {}
    }
    
    componentDidMount() {
        this.resolvePost(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        const id = Number(this.props.match.params.id);
        const prevId = Number(prevProps.match.params.id);

        if(id && (id !== prevId)) {
            this.resolvePost(id);
        }
    }

    resolvePost = async (id) => {
        const res = await API.getPost(id);
        this.setState({ post: res.data });
    }

    deletePostHandler = (id) => {
        API.deletePost(id)
    }

    render() {
        const post = this.state.post

        return (
            <div className="FullPost">
                {
                    !post.id ? 
                        <p>Sorry could not find that particular post, please try again!</p> :
                        <Post {...post} />
                }
            </div>

        );
    }
}

export default withHandleApiError(PostContainer, API.getInstance(), 'Something went wrong while trying to look for your post!');