import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";

const LoginPage=()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginUser=()=>{
        console.log(username)
        console.log(password)
    }

    setUsername('')
    setPassword('')


    return(
        <div className="container">
            <div className="form">
                <h1>Login Page</h1>
                 <form>
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" placeholder="Your username"
                        value={username}
                        name="username"
                        onChange={(e)=>{setUsername(e.target.value)}}
                        />
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Your password"
                         value={password}
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Button as="sub" variant="primary" onClick={loginUser}>Login</Button>
                    </FormGroup>
                </form>
            </div>
        </div>
    )
}

export default LoginPage