import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'


const Recipes = ({handleAddToCooking}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div className="container mx-auto mt-8 mr-8">
            <h2 className="text-4xl mb-4">Recipes ({recipes.length})</h2>
            <div className="flex flex-wrap -mx-32">
                {recipes.map((recipe,idx) => (
                    <div key={idx} className="w-full sm:w-1/2 md:w-1/2 lg:1/2 px-4 mb-8">
                        <Recipe recipe={recipe} handleAddToCooking = {handleAddToCooking} />
                    </div>
                ))}
            </div>
        </div>
    );
};
Recipes.prototypes = {
    handleAddToCooking: PropTypes.func
}

export default Recipes;