import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', '5'),
    new Ingredient('Milk', '12 lts'),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    // notify listeners that ingredients array is changed.
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
