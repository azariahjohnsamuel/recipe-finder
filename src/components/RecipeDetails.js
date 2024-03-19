// RecipeDetails.js
import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.instructions}</p>
      {/* Add more details here */}
    </div>
  );
};

export default RecipeDetails;
