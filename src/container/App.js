import React from 'react';
import NavBar from '../component/navbar/Navbar';
import Post from '../component/post/Post';
import Posts from '../component/posts/Posts';
import Post_Form from '../component/Form/Post/Post';
import Login from '../component/Form/Login/Login';
import SignUp from '../component/Form/Signup/SignUp';
import SinglePost from '../component/post/SinglePost/SinglePost';
import { Switch,Route,Redirect } from 'react-router-dom';
import './App.css';


const App=()=>{
let mk=0;
  return (
    <div className="App">
     <NavBar />
     <Switch>  
     <Route path="/create" exact component={Post_Form} />
     <Route path="/feed" component={Posts}/>
     <Route path="/Login"  component={Login} />
     <Route path="/register" exact component={SignUp} />
     <Route path="/:id" exact component={SinglePost} />
     {/*<Route
            path="/:postId"
            render={props => (
              <SinglePostPage
                {...props}
                userId={this.state.userId}
                token={this.state.token}
              />
            )}
          />*/}
     <Redirect to="/" />
     </Switch>
     
    </div>
  );
}

export default App;
