import { Component } from '@angular/core';
import { IPageHeader, PageHeader } from '../../reusable/page-header/page-header';

@Component({
  selector: 'app-community',
  imports: [PageHeader],
  templateUrl: './community.html',
  styleUrl: './community.css',
})
export class Community {
  pageHeader: IPageHeader = {
    heading: 'join yra',
    title: 'Become part of the community',
    description: 'Connect with researchers, access opportunities and participate in structured academic development.',
  };
}
