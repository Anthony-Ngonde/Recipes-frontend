import React from "react";
import { Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { useForm } from 'react-hook-form';


const CreateRecipePage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const createRecipe = (data) => {
        console.log(data);
        const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
        console.log(token);

        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`
            },
            body: JSON.stringify(data)
        };

        fetch('/recipe/recipes', requestOptions)
            .then(res => res.json())
            .then(data => {
                reset();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h1 className="heading">Create a Recipe</h1>
            <Form className="form" onSubmit={handleSubmit(createRecipe)}>
                <FormGroup>
                    <FormLabel className="form-label">Title</FormLabel>
                    <FormControl 
                        className="form-input"
                        type="text"
                        {...register('title', { required: true, maxLength: 25 })}
                    />
                </FormGroup>
                {errors.title && <p className="error-text">Title is required</p>}
                {errors.title?.type === "maxLength" && <p className="error-text">Title should be less than 25 characters</p>}

                <FormGroup>
                    <FormLabel className="form-label">Description</FormLabel>
                    <FormControl 
                        className="form-input"
                        as="textarea" 
                        rows={5}
                        {...register('description', { required: true, maxLength: 255 })}
                    />
                </FormGroup>
                {errors.description && <p className="error-text">Description is required</p>}
                {errors.description?.type === "maxLength" && <p className="error-text">Description should be less than 255 characters</p>}

                <FormGroup className="form-button-group">
                    <Button className="form-button" variant="primary" type="submit">
                        Save
                    </Button>
                </FormGroup>
            </Form>
        </div>
    );
};

export default CreateRecipePage;