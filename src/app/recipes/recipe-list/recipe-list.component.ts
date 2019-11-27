import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test',
    'https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d'),
    new Recipe('A Test Recipe', 'This is a simple test',
    'https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
