import React, { Component } from 'react';

import withHandleApiError from '../../hoc/withHandleApiError'
import { API } from '../../api';
import NewPost from '../../components/Post/NewPost';
import ConditionalRedirect from '../../components/Navigation/ConditionalRedirect';
import AuthenticationContainer from '../../containers/Authentication/Authentication';

class NewPostContainer extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    resolvePostData = (state) => ({
        title: state.title,
        body: state.content,
        author: state.author,
    })

    postDataHandler = async () => {
        try {
            await API.postNewPost(this.resolvePostData(this.state))
            this.setState({ ...this.state, submitted: true });
        } catch (error) {
            console.log(error, 'Error posting new post');
        }
    }

    handleChangeEvent = (obj = {}) => {
        this.setState({ ...this.state, ...obj });
    }

    render() {
        return (
            <ConditionalRedirect
                condition={this.state.submitted}
                to="/posts"
            >
                <NewPost
                    {...this.state}
                    handleChangeEvent={this.handleChangeEvent}
                    postDataHandler={this.postDataHandler}
                />
            </ConditionalRedirect>

        );
    }
}

export default withHandleApiError(NewPostContainer, API.getInstance(), 'Something went wrong while trying to add your post!');