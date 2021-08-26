import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRecipeComponent } from './recipe/empty-recipe/empty-recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CanDeactivateGuardService } from './shared/can-deactivate-guard';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipe',
    pathMatch: 'full',
  },
  {
    path: 'recipe',
    component: RecipeComponent,
    children: [
      {
        path: '',
        component: EmptyRecipeComponent,
      },
      {
        path: 'new',
        component: RecipeEditComponent,
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        canDeactivate: [CanDeactivateGuardService],
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
