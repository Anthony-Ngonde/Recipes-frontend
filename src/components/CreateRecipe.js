import React from "react";
import { Form,Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";


const CreateRecipePage=()=>{
    return(
        <div className="container">
            <h1>Create a Recipe</h1>
            <form>
                <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormControl type="text"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl as="textarea" rows={5}/>
                </FormGroup>
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