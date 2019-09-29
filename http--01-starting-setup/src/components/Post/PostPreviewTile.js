import React from 'react';

import './PostPreviewTile.css';

const post = (props) => (
    <article className="PostPreviewTile" onClick={() => props.handleSelectPost(props.id)}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;