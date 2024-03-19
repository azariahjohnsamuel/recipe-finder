// recipeService.js

import axios from 'axios';
import key from '../key';

const API_KEY = key;
const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${API_URL}&query=${query}&instructionsRequired=true`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
