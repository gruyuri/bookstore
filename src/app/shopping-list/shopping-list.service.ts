import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients() { return this.ingredients.slice(); }

  addIngredient(data: Ingredient) {
    this.ingredients.push(data);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(data: Ingredient[]) {
    this.ingredients.push(...data);
    this.ingredientsChanged.next(this.getIngredients());
  }
}
