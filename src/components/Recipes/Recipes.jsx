import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-4xl mb-4">Recipes ({recipes.length})</h2>
            <div className="flex flex-wrap -mx-8">
                {recipes.map(recipe => (
                    <div key={recipe.recipe_id} className="w-full sm:w-1/2 md:w-1/2 lg:1/2 px-4 mb-8">
                        <Recipe recipe={recipe} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;
