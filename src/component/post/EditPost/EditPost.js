import React,{useState,useEffect} from 'react';
import Button from '../../button/Button';
import './EditPost.css';


const EditPost =(props)=>{
    const [data,setData]=useState({
        author:"",
        title:"",
        content:"",
    });
    useEffect(()=>{
        setData({
            author:props.data.author,
            title:props.data.title,
            content:props.data.content
        })
    },[]);
    const dat=(t)=>{
        setData({
            ...data,
            [t.target.name]:t.target.value
        });
    }
    const finish=(event)=>{
        let id=props.data._id;
        console.log("clicked",id);
        event.preventDefault();
        fetch('https://blogpos-t.herokuapp.com/feed/'+id,{
            method:"put",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                author:data.author,
                title:data.title,
                content:data.content
            })
        }).then((res)=>{
            return res.json();
        }).then((ro)=>{
            console.log(ro);
            props.finish();
        }).catch(err=>{
            console.log(err);
            props.finish();
        });
    }
    
    /**/
    /*onClick={props.done}*/
    
    return (
        <div>
        <div class="post">
            
            <span className="post__author">
                <label for="author">Author</label>
                <input type="text" id="author" name="author" onChange={dat} value={data.author} /></span>
            <span className="post__title">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" onChange={dat} value={data.title} />
            </span>
            <p className="post__content">
                <label for="content">Content</label>
                <textarea  id="content" name="content" onChange={dat} value={data.content} rows="10" cols="70" />
            </p>
            <Button classes=" button--margin" onClick={props.cancel}>cancel</Button>
            <Button classes=" button--margin" onClick={finish} >Finish</Button>
        </div>
    </div>
    )
}

export default EditPost ;