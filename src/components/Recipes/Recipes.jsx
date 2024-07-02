import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div>

            <h2 className="text-4xl">Recipes{recipes.length}</h2>
            {
                recipes.map(recipe => <Recipe 
                    key={recipe.recipe_id} 
                    recipe={recipe}
                    ></Recipe>)

            }
            
        </div>
    );
};

export default Recipes;