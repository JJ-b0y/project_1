import { Component } from '@angular/core';
import { IPageHeader, PageHeader } from '../../reusable/page-header/page-header';

@Component({
  selector: 'app-media',
  imports: [PageHeader],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {
  pageHeader: IPageHeader = {
    heading: 'watch & learn',
    title: 'YRA Media',
    description: 'Seminar recordings, training sessions and research conversations. The production version should embed videos from the official YRA YouTube channel.',
  }
}
