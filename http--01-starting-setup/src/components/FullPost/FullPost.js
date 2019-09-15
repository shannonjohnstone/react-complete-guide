import React, { Component } from 'react';

import './FullPost.css';
import { API } from '../../api'

class FullPost extends Component {
    state = {
        loadedPost: {}
    }

    async componentDidUpdate() {
        const loadedPostId = this.state.loadedPost.id ? this.state.loadedPost.id : null;

        if (this.props.id && (this.props.id !== loadedPostId)) {
            const res = await API.getPost(this.props.id);
            const loadedPost = res.data;

            this.setState({ loadedPost });
        }
    }

    render() {
        const postData = this.state.loadedPost

        return (
            <div className="FullPost">
                {
                    !postData.id ? <p>Please select a Post!</p> :
                        (
                            <div>
                                <h1>{postData.title}</h1>
                                <p>{postData.body}</p>
                                <div className="Edit">
                                    <button className="Delete">Delete</button>
                                </div>
                            </div>
                        )

                }
            </div>

        );
    }
}

export default FullPost;