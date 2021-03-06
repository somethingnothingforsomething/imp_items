//import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
//@Output() onSelectedEvent = new EventEmitter<void>(); 
@Input() recipe : Recipe;
@Input() index : number;
  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.onSelectedEvent.emit();
  }

}
