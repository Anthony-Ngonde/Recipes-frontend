import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {

    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm();

    const [show, setShow] = useState(true)

    const [serverResponse, setServerResponse] = useState('')

    const submitForm = (data) => {

        const body={
            username:data.username,
            email:data.email,
            password:data.password
        }

        // console.log(data);

        if(data.password === data.confirmPassword){
            const requestOptions = {
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(body)      
            }
    
            fetch('/auth/signup', requestOptions)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setServerResponse(data.message)
                console.log(serverResponse)

                setShow(true)
            })
            .catch(err=>console.log(err))
            
    
            reset();
        }

        else{
            alert("Passwords do not match")
        }

        
      
    };

    return (
        <div className="container">
            <div className="form">
                
                {show?
                <>
                  <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    
                    <p>
                     {serverResponse}
                    </p>
            </Alert>
                <h1>Sign Up Page</h1>
          
                </>
                :
                <h1>Sign Up Page</h1>
           
                }

                {/* Add onSubmit to the form */}
                <form onSubmit={handleSubmit(submitForm)}> 
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl 
                            type="text" 
                            placeholder="Your username"
                            {...register("username", { required: true, maxLength: 25 })}
                        />
                        {errors.username && <p style={{ color: "red" }}><small>Username is required</small></p>}
                        {errors.username?.type === "maxLength" && <p style={{ color: "red" }}><small>Max characters should be 25</small></p>}
                    </FormGroup>
                    <br />

                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl 
                            type="email" 
                            placeholder="Your email"
                            {...register("email", { required: true, maxLength: 80 })}
                        />
                        {errors.email && <p style={{ color: "red" }}><small>Email is required</small></p>}
                        {errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Max characters should be 80</small></p>}
                    </FormGroup>
                    <br />

                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl 
                            type="password" 
                            placeholder="Your password"
                            {...register("password", { required: true, minLength: 8 })}
                        />
                        {errors.password && <p style={{ color: "red" }}><small>Password is required</small></p>}
                        {errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>Min characters should be 8</small></p>}
                    </FormGroup>
                    <br />

                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl 
                            type="password" 
                            placeholder="Confirm your password"
                            {...register("confirmPassword", { required: true, minLength: 8 })}
                        />
                        {errors.confirmPassword && <p style={{ color: "red" }}><small>Confirm Password is required</small></p>}
                        {errors.confirmPassword?.type === "minLength" && <p style={{ color: "red" }}><small>Min characters should be 8</small></p>}
                    </FormGroup>
                    <br />

                    <FormGroup>
                        {/* Ensure type="submit" for the button */}
                        <Button type="submit" variant="primary">Sign Up</Button>
                    </FormGroup>

                    <FormGroup>
                        <small>Already have an account? <Link to='/login'>Log in</Link></small>
                    </FormGroup>
                    <br />
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;