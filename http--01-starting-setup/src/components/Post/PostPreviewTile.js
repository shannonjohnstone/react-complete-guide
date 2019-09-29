import React from 'react';
import { Link } from 'react-router-dom';

import './PostPreviewTile.css';

const post = (props) => (
    <Link to={`/${props.id}`} className="PostPreviewTile">
        <article>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    </Link>
);

export default post;