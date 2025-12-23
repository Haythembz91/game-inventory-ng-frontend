import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {ItemsContainer} from './components/items-container/items-container';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, ItemsContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
