import Header from './components/Header/Header'
import './App.css'
import Banner from './components/Banner/Banner'
import OurRecipes from './components/ourRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Cookings from './components/Cookings/Cookings'
import { useState } from 'react'



function App() {
const [cookings, setCookings] = useState([]);

const handleAddToCooking = recipe =>{
const newCookings = [...cookings, recipe];
setCookings(newCookings)
}


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>

      <div className='md:flex justify-between max-w-7xl mx-auto'>
      <Recipes handleAddToCooking = {handleAddToCooking}></Recipes>
      <Cookings cookings ={cookings}></Cookings>
      </div>
      </>
  )
}

export default App
