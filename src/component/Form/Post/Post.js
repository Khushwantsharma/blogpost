import React ,{ useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';
const Post=(props)=>{
    let [post,setpost]=useState({
        author:"",
        title:"",
        content:""
    });
    const dat=(t)=>{
        //console.log(t.target.name,t.target.value)
        setpost({
            ...post,
            [t.target.name]:t.target.value
        });
    };
    const changed=(event)=>{
        event.preventDefault();
       // console.log(post);
        fetch('https://blogpos-t.herokuapp.com/feed',{
            method:"post",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                author:post.author,
                title:post.title,
                content:post.content
            })
        }).then((res)=>{
            return res.json();
        }).then((ro)=>{
            console.log(ro);
            props.history.push('/feed');
        }).catch(err=>{
            console.log(err);
            props.history.push('/feed');
        });
        
    };
    /**/
    return (
        <div>
        <form onSubmit={changed} >
            <label for="author">Author</label>
            <input type="text" id="author" name="author" onChange={dat} /><br />
            <label for="title">Title</label>
            <input type="text" id="title" name="title" onChange={dat} /><br />
            <label for="content">Content</label>
            <input type="text" id="content" name="content" onChange={dat} /><br />
            <button type="submit">Hello</button>
        </form>
    </div>
    )
    
}

export default Post;