import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [];
@Output() recipeSelected = new EventEmitter<Recipe>();
recipe = new Recipe('Dummy','dummy','https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg')
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe){
  this.recipeSelected.emit(recipe);
  }
}
