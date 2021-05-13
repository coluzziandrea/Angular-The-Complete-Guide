import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'recipe for testing',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw3DRo7PmfXvsFfituF9mKjD&ust=1621006242319000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCA_Pv8xvACFQAAAAAdAAAAABAD'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
