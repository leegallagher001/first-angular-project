import { Component, signal } from '@angular/core';
import { Greeting } from '../greeting/greeting';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  homeMessage = signal('A warm welcome!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`User Input Detected! Key Pressed: ${event.key}`);
  }
}
