import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo-container',
  imports: [NgClass],
  templateUrl: './logo-container.html',
  styleUrl: './logo-container.css',
})
export class LogoContainer {
  logoLoc = input.required<string>();
}
