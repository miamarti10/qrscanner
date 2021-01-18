import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  API_URL = 'https://api.edamam.com/search?app_id=7eae9a21&app_key=86cd235824988a5b3411ccff412225a6&q=pizza';
  API_ID = '7eae9a21';
  API_KEY = '86cd235824988a5b3411ccff412225a6';


constructor(private http: HttpClient) { }

getRecipes$(): Observable<any>{
  return this.http.get(this.API_URL);
}
}
