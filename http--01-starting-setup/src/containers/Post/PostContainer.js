import React, { Component } from 'react';
import Post from '../../components/Post/Post';


import { API } from '../../api'

class PostContainer extends Component {
    state = {
        loadedPost: {}
    }
    
    componentDidMount() {
        this.resolvePost(this.props.match.params.id)
    }

    resolvePost = async (id) => {
        const res = await API.getPost(id);
        this.setState({ loadedPost: res.data });
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
                        <p>Sorry could not find that particular post, please try again!</p> :
                        <Post {...postData} />
                }
            </div>

        );
    }
}

export default PostContainer;