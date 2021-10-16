import React from 'react';
import { useState, useEffect } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');
    const handleSearch = e => {
        const searchValue = e.target.value;
        setSearchText(searchValue)
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);
    return (

        <div>

            <input onChange={handleSearch} className="mt-3 form-control mb-3" type="text" placeholder="Search Meal here" />
            <div className="row">
                {
                    meals.map(meal => <Meal meal={meal}></Meal>)
                }
            </div>
        </div>

    );
};

export default Restaurant;