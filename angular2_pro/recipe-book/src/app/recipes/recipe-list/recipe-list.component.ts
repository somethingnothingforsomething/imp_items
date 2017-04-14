import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[] = [
new Recipe('Paneer Kofta','Awesome recipe..','https://upload.wikimedia.org/wikipedia/commons/0/03/Aloo-ghobhi-sabji.jpg'),
new Recipe('Alu jeera','Good recipe','https://upload.wikimedia.org/wikipedia/commons/e/ea/Jeera-aloo-foodpanda.jpg')

];

  constructor() { }

  ngOnInit() {
  }

}
