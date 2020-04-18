import React, {Component} from 'react';
import index from './index.css';

function MediaCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p class="bold">{props.body}</p>
      <img src={props.imageUrl} />
    </div>
  )
}

export default MediaCard;