import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  
/*   splash =true;
  tabBarElement:any; */

  public recipes =[]

  constructor(private RecipesService: RecipesService) { 
/*     this.tabBarElement = document.querySelector('.tabbar')
 */
  }

/*   ionViewDidLoad(){
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash =false;
      this.tabBarElement.style.display = 'flex';
    },4000);
  } */

  ngOnInit() {
    this.RecipesService.getRecipes$()
    .subscribe((data)=> this.recipes = data.hits);
  }

}
