import { NgClass, UpperCasePipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink, NgClass, UpperCasePipe, Button, NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  id = input.required<number>();
  heading = input.required<string>();
  title = input.required<string>();
  subTitle = input.required<string>();
  content = input.required<string>();
  link = input.required<string>();
  linkText = input.required<string>();
  showOverlay = input.required<boolean>();
  showOuterBorder = input.required<boolean>();
  outerBorderTextTag = input.required<string>();
  showOuterTextTag = input.required<boolean>();
  showButton = input.required<boolean>();
  buttonType = input.required<string>();
  buttonText = input.required<string>();
  needLongerCard = input.required<boolean>();
  minHeight = input.required<string>();

  @Output() cardBtnClick = new EventEmitter<void>();

  onCardBtnClickHandler() {
    this.cardBtnClick.emit();
  }
}
