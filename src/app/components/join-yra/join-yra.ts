import { Component } from '@angular/core';
import { IPageHeader, PageHeader } from '../../reusable/page-header/page-header';
import { Button } from '../../reusable/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-yra',
  imports: [
    PageHeader,
    Button,
  ],
  templateUrl: './join-yra.html',
  styleUrl: './join-yra.css',
})
export class JoinYra {

  constructor(private router: Router) {}

  pageHeader: IPageHeader = {
    heading: 'join yra',
    title: 'Become part of the community',
    description: 'Connect with researchers, access opportunities and participate in structured academic development.',
  };

  openSignup() {
    this.router.navigate(['/register']);
  };

  navigateToLogin() {
    this.router.navigate(['/login']);
  };

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  };
}
