import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  public recipes =[]

  constructor(private RecipesService: RecipesService) { 

  }

  ngOnInit() {
    this.RecipesService.getRecipes$()
    .subscribe((data)=> this.recipes = data.hits);
  }

}
