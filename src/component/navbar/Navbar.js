import reactDom from "react-dom";
import {NavLink} from 'react-router-dom';
import React from 'react';
import Button from '../button/Button';
import  './Navbar.css';
import  cls from './Navbar.css';

const NavBar=()=>{
    return(
        <div class="nav">
            <div className="nav__sub">
            <Button classes=" button--underline">img</Button>
            <NavLink to="/" exact activeClassName={cls.active} ><Button classes=" button--underline">Home</Button></NavLink>
            <NavLink to="/feed"><Button classes=" button--underline">Feed</Button></NavLink>
            <NavLink to="/create"><Button classes=" button--underline">Create</Button></NavLink>   

        </div>
        <div className="nav__sub">
        <NavLink to="/login"><Button classes=" button--underline">Sign In</Button></NavLink>
        <NavLink to="/register"><Button classes=" button--underline">Sign UP</Button></NavLink>
        </div>
        </div>
    );

}

export default NavBar;