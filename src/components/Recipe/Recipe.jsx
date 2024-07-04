import React from 'react';
import PropTypes from 'prop-types';
import { MdAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className='border p-4 rounded-md shadow-md w-2/3 max-w-lg mx-auto mt-4'>
            <div className='justify-center mb-8'>
                <img className='h-72 w-72 object-cover' src={recipe_image} alt={`Cover picture of the recipe ${recipe_name}`} />
            </div>
            <h2 className="text-4xl font-bold">{recipe_name}</h2>
            <p className='text-2xl border-b-2'>{short_description}</p>
            <h2 className='text-4xl font-bold '>Ingredients ({ingredients.length})</h2>
            <ul className='list-disc pl-5'>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>  
            <div className='flex justify-between border-b-2 py-4'>
                <div className='flex items-center'>
                    <MdAccessTime className='mr-2' />
                    <p>{preparing_time}</p>
                </div>
                <div className='flex items-center'>
                    <FaFire className='mr-2' />
                    <p>{calories}</p>
                </div>
            </div>
            <button className='btn btn-primary mt-4 justify-start'>Want to cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.shape({
        recipe_name: PropTypes.string.isRequired,
        recipe_image: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired,
    }).isRequired
};

export default Recipe;
