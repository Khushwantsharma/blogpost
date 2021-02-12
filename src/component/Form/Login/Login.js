import React from 'react';

const Login=()=>{
    
    return (
        <div>
        <form>
            <label for="Email">Email</label>
            <input type="email" id="Email" /><br />
            <label for="password">Password</label>
            <input type="text" id="password" />
            <button >Submmit</button>
        </form>
    </div>
    )
    
}

export default Login;