import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {       // "class" signifies we're using OOP
  title = 'app';  // corresponds with html {{ title }}
}                                 // able to set attributes/methods and create instances
