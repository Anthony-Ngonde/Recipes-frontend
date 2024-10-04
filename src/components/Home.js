import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import Recipe from "./Recipe";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Form, Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";


const LoggedinHome = () => {
    const [recipes, setRecipes] = useState([]);
    const [show, setShow] = useState(false);
    const { register, reset, handleSubmit, setValue, formState: { errors } } = useForm();
    const [recipeId, setRecipeId] = useState(0);

    useEffect(() => {
        fetch('/recipe/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
            })
            .catch(err => console.log(err));
    }, []);

    const getAllRecipes = () => {
        fetch('/recipe/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
            })
            .catch(err => console.log(err));
    };

    const closeModal = () => {
        setShow(false);
    };

    const showModal = (id) => {
        setShow(true);
        setRecipeId(id);
        recipes.map((recipe) => {
            if (recipe.id == id) {
                setValue('title', recipe.title);
                setValue('description', recipe.description);
            }
        });
    };

    let token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');

    const updateRecipe = (data) => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`
            },
            body: JSON.stringify(data)
        };

        fetch(`/recipe/recipe/${recipeId}`, requestOptions)
            .then(res => res.json())
            .then(() => {
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    const deleteRecipe = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`
            },
        };

        fetch(`/recipe/recipe/${id}`, requestOptions)
            .then(() => {
                getAllRecipes();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="recipes-container container">
            <Modal 
                show={show}
                size="lg"
                onHide={closeModal}
            >
                <ModalHeader closeButton>
                    <ModalTitle>Update Recipe</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(updateRecipe)}>
                        <FormGroup>
                            <FormLabel>Title</FormLabel>
                            <FormControl 
                                type="text"
                                {...register('title', { required: true, maxLength: 25 })}
                            />
                        </FormGroup>
                        {errors.title && <p className="error-text">Title is required</p>}
                        {errors.title?.type === "maxLength" && <p className="error-text">Title should be less than 25 characters</p>}

                        <FormGroup>
                            <FormLabel>Description</FormLabel>
                            <FormControl 
                                as="textarea" 
                                rows={5}
                                {...register('description', { required: true, maxLength: 255 })}
                            />
                        </FormGroup>
                        {errors.description && <p className="error-text">Description is required</p>}
                        {errors.description?.type === "maxLength" && <p className="error-text">Description should be less than 255 characters</p>}

                        <br />
                        <FormGroup>
                            <Button className="form-button" variant="primary" type="submit">
                                Save
                            </Button>
                        </FormGroup>
                    </form>
                </ModalBody>
            </Modal>
            
            <h1 className="heading">List of Recipes</h1>
            <div className="recipe-list">
                {
                    recipes.map((recipe, index) => (
                        <Recipe
                            title={recipe.title}
                            key={index}
                            description={recipe.description}
                            onClick={() => showModal(recipe.id)}
                            onDelete={() => { deleteRecipe(recipe.id) }}
                        />
                    ))
                }
            </div>
        </div>
    );
}

const LoggedOutHome = () => {
    return (
        <div className="home-container container">
            <h1 className="heading">Welcome to the Recipes</h1>
            <Link to='/signup' className="btn btn-primary btn-lg">Get Started</Link>
        </div>
    );
}

const HomePage = () => {
    const [logged] = useAuth();

    return (
        <div>
            {logged ? <LoggedinHome /> : <LoggedOutHome />}
        </div>
    );
}

export default HomePage;