import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Banner from './components/Banner/Banner';
import OurRecipes from './components/ourRecipes/OurRecipes';
import Recipes from './components/Recipes/Recipes';
import Cookings from './components/Cookings/Cookings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [cookings, setCookings] = useState([]);
    const [preparing, setPreparing] = useState([]);
    const [addedCookings, setAddedCookings] = useState([]);

    const handleAddToCooking = (recipe) => {
        if (addedCookings.includes(recipe)) {
            toast.warning('This recipe is already in your list!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setCookings((prevCookings) => [...prevCookings, recipe]);
            setAddedCookings((prevAdded) => [...prevAdded, recipe]);
        }
    };

    const handlePreparing = (recipe) => {
        setPreparing((prevPreparing) => [...prevPreparing, recipe]);
        setCookings((prevCookings) => prevCookings.filter((item) => item !== recipe));
    };

    return (
        <>
            <Header />
            <Banner />
            <OurRecipes />
            <ToastContainer />
            <div className='container mx-auto mt-8 flex flex-col  md:flex-row gap-4'>
                <div className='md:w-2/3'>
                    <Recipes handleAddToCooking={handleAddToCooking} />
                </div>
                <div className='md:w-1/3 flex flex-col gap-4 ml-8'>
                    <Cookings cookings={cookings} handlePreparing={handlePreparing} />
                    <div className= 'ml-4 bg-gray-300 p-4 rounded-xl'>
                        <h1 className='text-2xl mb-4'>Preparing no: {preparing.length}</h1>
                        {preparing.map((recipe, index) => (
                            <div key={index} className='flex justify-between p-4 mb-4 border-b'>
                                <h3>{recipe.recipe_name}</h3>
                                <p>{recipe.preparing_time}</p>
                                <p>{recipe.calories}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;