import { Component } from '@angular/core';
import { Todo } from './Models/Todo' ; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  ItemList :Array<Todo> = [];
  Item: Todo = {Completed: false, ItemName :''};
  AddItem(){
   console.log("Eklenen item:"+ this.Item.ItemName);
   this.ItemList.push({'Completed' : this.Item.Completed,'ItemName': this.Item.ItemName});
   console.log(this.ItemList);
   this.Item.ItemName = ''; 
  }
  ItemCompleted(todo Todo){
    this.ItemList.find(x=>x.ItemName == todo.ItemName).Completed = true;
    console.log(this.ItemList);
  }
}

