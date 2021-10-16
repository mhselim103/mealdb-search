import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Meal = (props) => {
    const { idMeal, strMeal, strMealThumb } = props.meal;
    const history  = useHistory();
    const buttonHandler = () => {
        history.push(`/restaurants/${idMeal}`)
    }
    return (
        <div className="col-md-4"> 
            <Card className="h-100">
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={buttonHandler} variant="primary">View Details</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Meal;