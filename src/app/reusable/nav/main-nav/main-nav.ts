import { Component, OnInit, Signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../../button/button';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LogoContainer } from '../../logo-container/logo-container';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAuthSession } from '../../../app-state/models/user.model';
import { logout } from '../../../app-state/logged-in/logged-in.actions';
import { selectAuthInitialized, selectIsLoggedIn } from '../../../app-state/logged-in/logged-in.selectors';

interface INavLink {
  id: number;
  name: string;
  path: string;
};

@Component({
  selector: 'app-main-nav',
  imports: [Button, RouterLink, RouterLinkActive, MatButtonModule, MatMenuModule, MatIconModule, LogoContainer],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.css',
})
export class MainNav implements OnInit {

  loggedInState$: Signal<boolean>;
  authInitializedState$: Signal<boolean>;

  constructor(
    private router: Router,
    private store: Store<{ loggedIn: IAuthSession }>,
  ) {
    this.loggedInState$ = this.store.selectSignal(selectIsLoggedIn);
    this.authInitializedState$ = this.store.selectSignal(selectAuthInitialized);
  }

  navLinks: INavLink[] = [
    {
      id: 0,
      name: 'About',
      path: 'about',
    },
    {
      id: 1,
      name: 'Programmes',
      path: 'programmes',
    },
    {
      id: 2,
      name: 'Resources',
      path: 'resources',
    },
    {
      id: 3,
      name: 'Events',
      path: 'events',
    },
    {
      id: 4,
      name: 'Media',
      path: 'media',
    },
    {
      id: 5,
      name: 'Opportunities',
      path: 'opportunities',
    },
    {
      id: 6,
      name: 'Community',
      path: 'signup',
    },
  ];

  allLinks: INavLink[] = [
    {
      id: 0,
      name: 'Home',
      path: '',
    },
    {
      id: 1,
      name: 'About',
      path: 'about',
    },
    {
      id: 2,
      name: 'Programmes',
      path: 'programmes',
    },
    {
      id: 3,
      name: 'Resources',
      path: 'resources',
    },
    {
      id: 4,
      name: 'Events',
      path: 'events',
    },
    {
      id: 5,
      name: 'Media',
      path: 'media',
    },
    {
      id: 6,
      name: 'Opportunities',
      path: 'opportunities',
    },
    {
      id: 7,
      name: 'Community',
      path: 'signup',
    },
    {
      id: 8,
      name: 'Login',
      path: 'login',
    },
    {
      id: 9,
      name: 'Join YRA',
      path: 'signup',
    },
  ];

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  logOutUser(): void {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    console.log("LOGGED IN STATE: ", this.loggedInState$);
  }
}
