import React from "react";
import { Form,Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import {useForm} from 'react-hook-form'


const CreateRecipePage=()=>{

    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    return(
        <div className="container">
            <h1>Create a Recipe</h1>
            <form>
                <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormControl type="text"
                    {...register('title', {required:true, maxLength:25})}

                    />
                </FormGroup>

                {errors.title && <p style={{color:'red'}}><small>Title is required</small></p>}

                {errors.title?.type === "maxLength" && <p style={{color:'red'}}><small>Title should be less than 25 characters</small></p>}
                
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl as="textarea" rows={5}
                     {...register('description', {required:true, maxLength:255})}
                     
                    />
                </FormGroup>

                {errors.description && <p style={{color:'red'}}><small>Description is required</small></p>}

                {errors.description?.type === "maxLength" && <p style={{color:'red'}}><small>Description should be less than 255 characters</small></p>}

                <br></br>
                <FormGroup>
                    <Button variant="primary">
                        Save
                    </Button>
                </FormGroup>
            </form>
        </div>
    )
}

export default CreateRecipePage