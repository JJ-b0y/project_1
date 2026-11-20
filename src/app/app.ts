import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNav } from './reusable/nav/main-nav/main-nav';
import { Footer } from './components/footer/footer';
import { UpperNav } from './reusable/nav/upper-nav/upper-nav';
import { Store } from '@ngrx/store';
import { restoreAuthSession } from './app-state/logged-in/logged-in.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperNav, MainNav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project_1');

  constructor(private store: Store) {
    this.store.dispatch(restoreAuthSession());
  }
}
