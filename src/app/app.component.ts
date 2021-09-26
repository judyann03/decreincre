import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decrement-increment';
  number = 310;
  value = '';

  decrement() {
    var val = Math.floor(Math.random() * 10);
    this.number = this.number - val;
    
  }

  increment() {
    var val = Math.floor(Math.random() * 10);
    this.number = this.number + val;
   
  }
}
