import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private svcShoppingList: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe('A Test 1 Recipe', 'This is a simple Pizza',
    'https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('A Test 2 Recipe', 'This is a simple Paella',
    'https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.svcShoppingList.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
