import React from 'react'
import { Route } from 'react-router-dom'

import PostContainer from '../Post/PostContainer';
import PreviewPostsContainer from '../Post/PreviewPostsContainer';

/**
 * Posts API call
 * 
 * Could maybe move the API call for posts to this container
 * This way once the post is clicked to be view that post can be picked
 * from the already existing array of requested posts and passed to the post container
 * 
 * Downside to this is that the Post container could not be used on its own :(
 */

const PostsContainer = (props) => {
  return (
    <div>
      <PreviewPostsContainer />
      <Route path={`${props.match.url}/:id`} component={PostContainer} />
    </div>
  )
}

export default PostsContainer