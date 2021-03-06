import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe!: Recipe;

  id!: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.retrieveRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addRecipeIngredientsToShoppingList(this.recipe);

    alert('Ingredients added successfully');
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);

    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
