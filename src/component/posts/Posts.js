import React,{ Component} from 'react';
import EditPost from '../post/EditPost/EditPost';
import Post from '../post/Post';
import './Posts.css';

class Posts extends Component{
    state={
        data:[],
        isEditing:false,
        editPost:""
    }
    componentDidMount(){
        console.log("componentDidMount");
        fetch('https://blogpos-t.herokuapp.com/feed')
        .then(response=>{
            return response.json();

        }).then(dat=>{
            console.log(dat);
            this.setState({data:dat});
        })
        .catch(err=>{
            console.log("Error");
        });
    };
    startEdit=(id)=>{
        console.log(id);
        this.setState((prevState,props)=>{
            return {
                ...this.state,
                isEditing:true,
                editPost:prevState.data.find(p=> p._id===id)
            }
        });
    }
    cancelEdit=()=>{
        
        this.setState((prevState,props)=>{
            return {
                ...this.state,
                isEditing:false,
                editPost:{}
            }
        });
    }
    finishEdit=()=>{
        
        this.setState((prevState,props)=>{
            return {
                ...this.state,
                isEditing:false,
                editPost:{}
            }
        });
        fetch('https://blogpos-t.herokuapp.com/feed')
        .then(response=>{
            return response.json();

        }).then(dat=>{
            console.log(dat);
            this.setState({data:dat});
        })
        .catch(err=>{
            console.log("Error");
        });
    }
    deletePost=(id)=>{
        fetch('https://blogpos-t.herokuapp.com/feed'+id,{
            method:"delete",
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res=>{
            fetch('https://blogpos-t.herokuapp.com/feed')
        .then(response=>{
            return response.json();

        }).then(dat=>{
            console.log(dat);
            this.setState({data:dat});
        })
        .catch(err=>{
            console.log("Error");
        });
        }).catch(er=>{
            console.log("Error");
        })
    }
    
   render(){     
    let data=this.state.data;
       let post;
       if(!data){
           data=[];
       }
       if(this.state.isEditing){
           return(<EditPost  data={this.state.editPost} cancel={this.cancelEdit} finish={this.finishEdit}/>);
       }
       post=(
           <div>
               {data.map(p=>{
                   return(<Post data={p} edit={this.startEdit.bind(this,p._id)} delete={this.deletePost.bind(this,p._id)} />)
               })}
           </div>
       );

       return(<div>{post}</div>);
   }  
}

export default Posts;