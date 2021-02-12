import React ,{Component} from 'react';
import Button from '../../button/Button';
import './SinglePost.css';

class SinglePost extends Component{
    state={
        data:"",
        error:false
    }
    componentDidMount(){
        const postId = this.props.match.params.id;
        console.log(postId);
        fetch('https://blogpos-t.herokuapp.com/feed/'+postId)
        .then(response=>{
            return response.json();

        }).then(dat=>{
            console.log(dat);
            this.setState({data:dat});
        })
        .catch(err=>{
            console.log("Error");
            this.setState({data:"",error:true});
        });
    };
    render(){
        if(this.state.error){
            return (<h1>Error Occured</h1>)
        }
        return (
            <div>
            <div class="post">
                <Button classes=" button--flo button--margin">Delete</Button>
                <Button classes=" button--flo button--margin">Edit</Button>
                <span className="post__author">{this.state.data.author}</span>
                <span className="post__title">{this.state.data.title}</span>
                <p className="post__content">{this.state.data.content}</p>
            </div>
        </div>
        )
    }
};
export default SinglePost;