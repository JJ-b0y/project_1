import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  buttonType = input.required<string>();
  buttonText = input.required<string>();
  @Output() onClickTracker = new EventEmitter<void>();

  onClickHandler() {
    this.onClickTracker.emit();
  }
}
