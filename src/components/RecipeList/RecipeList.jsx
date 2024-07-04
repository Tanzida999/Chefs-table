import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
    return (
        <div className='container mx-auto p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {recipes.map((recipe, index) => (
                    <Recipe key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({
        recipe_name: PropTypes.string.isRequired,
        recipe_image: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired,
    })).isRequired
};

export default RecipeList;
