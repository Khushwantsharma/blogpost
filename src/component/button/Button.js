import React from 'react';
import './Button.css'

const button=(props)=>{
    console.log(props.classes);
    return(
        <button className={"button"+props.classes} onClick={props.onClick}> {props.children}</button>
    );
}
export default button;