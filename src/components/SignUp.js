import React from "react";
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";


const SignUpPage=()=>{
    return(
        <div className="container">
            <div className="form">
                <h1>Sign Up Page</h1>
                 <form>
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" placeholder="Your username"
                        value={username}
                        name="username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" placeholder="Your email"
                         value={email}
                        name="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Your password"
                         value={password}
                        name="password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl type="password" placeholder="Your password"
                         value={confirmPassword}
                        name="confirmPassword"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button as="sub" variant="primary">SignUp</Button>
                    </FormGroup>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage