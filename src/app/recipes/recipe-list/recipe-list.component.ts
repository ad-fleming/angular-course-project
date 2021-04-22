import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test!', 'https://yournorthcounty.com/wp-content/uploads/2017/09/best-burger-in-san-diego-north-county-1024x647.jpg'),
    new Recipe('Test Recipe', 'This is just a test!', 'https://yournorthcounty.com/wp-content/uploads/2017/09/best-burger-in-san-diego-north-county-1024x647.jpg')

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
