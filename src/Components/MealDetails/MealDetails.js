import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MealDetails = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
        
    },[])
    return (
        <div className="w-50 mx-auto mt-3">
            <Card >
                <Card.Img variant="top w-50 mx-auto rounded-circle" src={meal.strMealThumb} />
                <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                    <p>{meal.strInstructions}</p>
                </Card.Body>
                <Card.Footer className="text-center ">
                    <Link className="text-decoration-none bg-primary text-white rounded" to="/home">See all Meals</Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default MealDetails;