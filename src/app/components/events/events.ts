import { Component } from '@angular/core';
import { IPageHeader, PageHeader } from '../../reusable/page-header/page-header';
import { UpperCasePipe } from '@angular/common';
import { Card } from '../../reusable/card/card';

@Component({
  selector: 'app-events',
  imports: [PageHeader, Card, UpperCasePipe],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  pageHeader: IPageHeader = {
    heading: 'stay connected',
    title: 'Events & Training',
    description: 'Register for upcoming YRA programmes or explore the training archive.',
  };

  upcomingEvents = [
    {
      id: 0,
      heading: 'training',
      title: 'YRA Global Research Bootcamp 2026',
      subTitle: '20 Aug · Online · 4 Weeks',
      content: 'Registration fee: ₦15,000',
      link: '',
      linkText: '',
      showOverlay: false,
      showOuterBorder: true,
      outerBorderTextTag: 'bootcamp',
      showOuterTextTag: true,
      showButton: true,
      buttonType: 'orange',
      buttonText: 'Register now',
      needLongerCard: true,
      minHeight: '400px',
    },
    {
      id: 1,
      heading: 'seminar',
      title: 'How to Write a Systematic Literature Review',
      subTitle: '30 Aug · Online · 1 Day',
      content: 'Practical SLR writing and publication session.',
      link: '',
      linkText: '',
      showOverlay: false,
      showOuterBorder: true,
      outerBorderTextTag: 'slr',
      showOuterTextTag: true,
      showButton: true,
      buttonType: 'white',
      buttonText: 'View details',
      needLongerCard: true,
      minHeight: '400px',
    },
    {
      id: 2,
      heading: 'workshop',
      title: 'Data Analysis with SPSS for Researchers',
      subTitle: '10 Sep · Online · 2 Days',
      content: 'Hands-on statistical analysis workshop.',
      link: '',
      linkText: '',
      showOverlay: false,
      showOuterBorder: true,
      outerBorderTextTag: 'spss',
      showOuterTextTag: true,
      showButton: true,
      buttonType: 'white',
      buttonText: 'View details',
      needLongerCard: true,
      minHeight: '400px',
    },
  ];
}
