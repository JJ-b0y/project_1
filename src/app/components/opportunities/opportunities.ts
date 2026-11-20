import { Component } from '@angular/core';
import { IPageHeader, PageHeader } from '../../reusable/page-header/page-header';
import { Card } from '../../reusable/card/card';

@Component({
  selector: 'app-opportunities',
  imports: [PageHeader, Card],
  templateUrl: './opportunities.html',
  styleUrl: './opportunities.css',
})
export class Opportunities {
  pageHeader: IPageHeader = {
    heading: 'stay informed',
    title: 'Research Opportunities',
    description: 'Academic calls, grants, fellowships, conferences and other opportunities curated for researchers.',
  };

  opportunities = [
    {
      id: 0,
      heading: 'call for papers',
      title: 'Special Issue Opportunities',
      subTitle: '',
      content: 'Browse current calls for papers and themed journal issues.',
      link: '#',
      linkText: 'View opportunity →',
      showOverlay: false,
      showOuterBorder: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
      outerBorderTextTag: '',
      showOuterTextTag: false,
      needLongerCard: false,
      minHeight: '',
    },
    {
      id: 1,
      heading: 'fellowship',
      title: 'Research Fellowship Opportunities',
      subTitle: '',
      content: 'Discover fellowships and academic development programmes.',
      link: '#',
      linkText: 'View opportunity →',
      showOverlay: false,
      showOuterBorder: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
      outerBorderTextTag: '',
      showOuterTextTag: false,
      needLongerCard: false,
      minHeight: '',
    },
    {
      id: 2,
      heading: 'grant',
      title: 'Research Funding Calls',
      subTitle: '',
      content: 'Explore funding opportunities relevant to researchers.',
      link: '#',
      linkText: 'View opportunity →',
      showOverlay: false,
      showOuterBorder: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
      outerBorderTextTag: '',
      showOuterTextTag: false,
      needLongerCard: false,
      minHeight: '',
    },
  ];
}
