import Header from './components/Header/Header'
import './App.css'
import Banner from './components/Banner/Banner'
import OurRecipes from './components/ourRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Cookings from './components/Cookings/Cookings'



function App() {


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>

      <div className='md:flex justify-between'>
      <Recipes></Recipes>
      <Cookings></Cookings>
      </div>
      </>
  )
}

export default App
