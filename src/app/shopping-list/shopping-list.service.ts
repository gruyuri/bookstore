import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() { return this.ingredients.slice(); }

  addIngredient(data: Ingredient) {
    this.ingredients.push(data);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
