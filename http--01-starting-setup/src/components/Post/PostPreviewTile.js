import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './PostPreviewTile.css';

const Post = (props) => (
    <Link to={`${props.match.url}/${props.id}`} className="PostPreviewTile">
        <article>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    </Link>
);

export default withRouter(Post);