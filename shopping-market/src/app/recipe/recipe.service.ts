import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel ',
      'A super tasty Schnitzel  - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://www.bora.com/fileadmin/website_content/Erleben/Cooking/55_Team_Edition/Rezeptbilder/55_TeamEdition_Canada_Halloumi-Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    // returns a COPY of the array
    return this.recipes.slice();
  }

  retrieveRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipeIngredientsToShoppingList(recipe: Recipe) {
    this.slService.addIngredients(recipe.ingredients);
  }
}
