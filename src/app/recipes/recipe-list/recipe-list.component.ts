import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test 1 Recipe', 'This is a simple Pizza',
    'https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d'),
    new Recipe('A Test 2 Recipe', 'This is a simple Paella',
    'https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
