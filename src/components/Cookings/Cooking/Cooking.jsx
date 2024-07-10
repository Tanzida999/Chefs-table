import React from 'react';
import PropTypes from 'prop-types';

const Cooking = ({ cooking, handlePreparing }) => {
    const { recipe_name, preparing_time, calories } = cooking;
    return (
        <div className='flex justify-between p-4 m-4 gap-2'>
            <h3>{recipe_name}</h3>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button 
                className='btn btn-primary pl-4'
                onClick={() => handlePreparing(cooking)}
            >Preparing</button>
        </div>
    );
};

Cooking.propTypes = {
    cooking: PropTypes.object.isRequired,
    handlePreparing: PropTypes.func.isRequired
};

export default Cooking;
