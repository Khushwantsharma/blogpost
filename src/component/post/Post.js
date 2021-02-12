import React from 'react';
import Button from '../button/Button';
import './Post.css';


const Post =(props)=>{
    
    
    return (
        <div>
        <div class="post">
            <Button classes=" button--flo button--margin"onClick={props.delete}>Delete</Button>
            <Button classes=" button--flo button--margin" onClick={props.edit}>Edit</Button>
            <a href={props.data._id}><Button classes=" button--flo button--margin">view</Button></a>
            <span className="post__author">{props.data.author}</span>
            <span className="post__title">{props.data.title}</span>
            <p className="post__content">{props.data.content}</p>
        </div>
    </div>
    )
}

export default Post ;