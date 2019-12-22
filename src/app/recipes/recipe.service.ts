import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test 1 Recipe', 'This is a simple Pizza',
    'https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d'),
    new Recipe('A Test 2 Recipe', 'This is a simple Paella',
    'https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
