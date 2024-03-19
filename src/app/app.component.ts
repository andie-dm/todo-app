import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputButtonUnitComponent ], 
  template: `Title : {{title}} <app-input-button-unit/>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'andies list';
}
 