import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoContainer } from '../../reusable/logo-container/logo-container';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, LogoContainer],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public currentYear = new Date().getFullYear();
}
