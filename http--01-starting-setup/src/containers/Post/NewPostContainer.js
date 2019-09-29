import React, { Component } from 'react';

import withHandleApiError from '../../hoc/withHandleApiError'
import { API } from '../../api';
import NewPost from '../../components/Post/NewPost';

class NewPostContainer extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    resolvePostData = (state) => ({
        title: state.title,
        body: state.content,
        author: state.author,
    })

    postDataHandler = async () => {
        await API.postNewPost(this.resolvePostData(this.state))
    }

    handleChangeEvent = (obj = {}) => {
        this.setState({ ...this.state, ...obj })
    }

    render() {
        return (
            <NewPost 
                {...this.state}
                handleChangeEvent={this.handleChangeEvent}
                postDataHandler={this.postDataHandler}
            />
        );
    }
}

export default withHandleApiError(NewPostContainer, API.getInstance(), 'Something went wrong while trying to add your post!');