import React from "react";
import { Card, Modal, CardBody, CardTitle, Button } from "react-bootstrap";


const Recipe=({title, description, onClick, onDelete})=>{
    return(
        <Card className="recipe"> 
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <p>{description}</p>
                <Button variant="primary" onClick={onClick}>Update</Button>
                {' '}
                <Button className="delete-button" variant="danger" onClick={onDelete}>Delete</Button>
            </CardBody>
            
        </Card>
    )
}


export default Recipe;