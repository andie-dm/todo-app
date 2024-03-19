import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputButtonUnitComponent, TodoItemComponent ], 
template: `Title: {{title}}
<ul>
  @for( todoItem of todoList; track todoItem.title) {
    <li>
    <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  }
</ul>
  <app-input-button-unit></app-input-button-unit>  
`,
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  title = 'andies list';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
    {title: 'make meals'},
  ];

  constructor() { 
    this.title = 'I love Angular (andies list)';
  }

}
 