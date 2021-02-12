import React from 'react';

const SignUp=()=>{
    return (
        <div>
        <form>
            <label for="username">UserName</label>
            <input type="text" id="username" /><br />
            <label for="email">Email</label>
            <input type="email" id="email" /><br />
            <label for="password">Password</label>
            <input type="text" id="password" />
        </form>
    </div>
    )
    
}

export default SignUp;