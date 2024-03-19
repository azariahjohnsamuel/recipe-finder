import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import Header from './components/header';
import Footer from './components/footer';
import RecipeDetails from './components/RecipeDetails'; 
import { fetchRecipes } from './services/recipeService';
import './styles.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const fetchedRecipes = await fetchRecipes(query);
    setRecipes(fetchedRecipes);
  };
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="app">
      <Header></Header>
      <SearchBar onSearch={handleSearch} />
      {selectedRecipe ? (
          <RecipeDetails recipe={selectedRecipe} />
        ) : (
          <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        )}
      <Footer></Footer>
    </div>
  );
};

export default App;
