import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {

    const { recipe_name, recipe_image } = recipe;

    return (
        <div>
            <img className='w-full mb-8' src={recipe_image} alt={`Cover picture of the recipe ${recipe}`} />
            <h2 className="text-4xl">{recipe_name}</h2>
            
        </div>
    );
};
Recipe.propTypes ={
    recipe:PropTypes.object.isRequired   
}
export default Recipe;