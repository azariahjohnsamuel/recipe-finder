// RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe, onRecipeClick }) => {
  const handleClick = () => {
    onRecipeClick(recipe);
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <img src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>Ready in {recipe.readyInMinutes} minutes</p>
    </div>
  );
};

export default RecipeCard;
