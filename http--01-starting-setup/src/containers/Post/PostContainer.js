import React, { Component } from 'react';
import Post from '../../components/Post/Post';

import { API } from '../../api'

class PostContainer extends Component {
    state = {
        loadedPost: {}
    }

    componentDidUpdate() {
        const loadedPostId = this.state.loadedPost.id ? this.state.loadedPost.id : null;

        console.log(this.props.id !== loadedPostId, this.props.id, loadedPostId, 'this.props.id !== loadedPostId')
        if (this.props.id && (this.props.id !== loadedPostId)) {
            this.resolvePost(this.props.id)
        }
    }

    resolvePost = async (id) => {
        const res = await API.getPost(id);

        const loadedPost = res.data;

        this.setState({ loadedPost });
    }

    deletePostHandler = (id) => {
        API.deletePost(id)
    }

    render() {
        const postData = this.state.loadedPost

        return (
            <div className="FullPost">
                {
                    !postData.id ? 
                        <p>Please select a Post!</p> :
                        <Post {...postData} />
                }
            </div>

        );
    }
}

export default PostContainer;