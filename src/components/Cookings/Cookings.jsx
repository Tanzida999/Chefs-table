import React from 'react';
import PropTypes from 'prop-types';
import Cooking from './Cooking/Cooking';

const Cookings = ({ cookings, handlePreparing }) => {
    return (
        <div className='md: bg-gray-300 ml-4 mt-8 pt-4 rounded-xl'>
            <h1 className='text-2xl'>Want to Cook : {cookings.length}</h1>
            <div className='flex justify-between p-4 m-4'>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            {cookings.map((cooking, idx )=> (
                <Cooking key={idx} cooking={cooking} handlePreparing={handlePreparing} />
            ))}
        </div>
    );
};

Cookings.propTypes = {
    cookings: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired
};

export default Cookings;
