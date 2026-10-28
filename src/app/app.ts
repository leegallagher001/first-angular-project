import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Home } from '../components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home],
  template: `
  <app-header />
  <app-home />
  <app-footer />
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-project');
}
