import { Component, Input } from '@angular/core';

export interface IPageHeader {
  heading: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
