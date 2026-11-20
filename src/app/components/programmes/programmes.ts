import { Component } from '@angular/core';
import { IPageHeader, PageHeader } from '../../reusable/page-header/page-header';
import { Card } from '../../reusable/card/card';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-programmes',
  imports: [PageHeader, Card, UpperCasePipe],
  templateUrl: './programmes.html',
  styleUrl: './programmes.css',
})
export class Programmes {
  pageHeader: IPageHeader = {
    heading: 'learn with yra',
    title: 'Programmes',
    description: 'Structured seminars, workshops, trainings, bootcamps and masterclasses designed around research development.',
  };

  upcomingEvents = [
    {
      id: 0,
      heading: 'training',
      title: 'YRA Global Research Bootcamp 2026',
      subTitle: 'Intensive research training for emerging researchers and scholars.',
      content: 'Online · 4 Weeks · Paid',
      link: '',
      linkText: '',
      showOverlay: false,
      showOuterBorder: true,
      outerBorderTextTag: '',
      showOuterTextTag: false,
      showButton: false,
      buttonType: 'orange',
      buttonText: 'View programme',
      needLongerCard: true,
      minHeight: '300px',
    },
    {
      id: 1,
      heading: 'seminar',
      title: 'How to Write a Systematic Literature Review',
      subTitle: 'Practical session on systematic literature review and publication.',
      content: 'Online · 1 Day · Paid',
      link: '',
      linkText: '',
      showOverlay: false,
      showOuterBorder: true,
      outerBorderTextTag: '',
      showOuterTextTag: false,
      showButton: false,
      buttonType: 'white',
      buttonText: 'View programme',
      needLongerCard: true,
      minHeight: '300px',
    },
    {
      id: 2,
      heading: 'workshop',
      title: 'Data Analysis with SPSS for Researchers',
      subTitle: 'Hands-on training on data analysis and interpretation.',
      content: 'Online · 2 Days · Paid',
      link: '',
      linkText: '',
      showOverlay: false,
      showOuterBorder: true,
      outerBorderTextTag: '',
      showOuterTextTag: false,
      showButton: false,
      buttonType: 'orange',
      buttonText: 'View programme',
      needLongerCard: true,
      minHeight: '300px',
    },
  ];
}
