import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Button } from '../../reusable/button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    Button,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  registered = [
    {
      participant: "Jane Smith",
      programme: "Research Bootcamp",
      payment: "₦15,000",
      status: "PAID",
    },
    {
      participant: "David Ade",
      programme: "SLR Masterclass",
      payment: "₦5,000",
      status: "PAID",
    },
    {
      participant: "Jane Smith",
      programme: "Research Seminar",
      payment: "Free",
      status: "REGISTERED",
    },
  ];

  topCards = [
    {
      figure: 428,
      category: "Members"
    },
    {
      figure: 12,
      category: "Upcoming events"
    },
    {
      figure: 86,
      category: "Resources"
    },
    {
      figure: "284k",
      category: "Month revenue"
    },
  ];

  bottomCards = [
    {
      title: "Research & Training",
      desc: "Create programmes, manage facilitators and upload training materials."
    },
    {
      title: "Communications & Engagement",
      desc: "Publish announcements, media and public-facing content."
    },
    {
      title: "Finance & Operations",
      desc: "Manage transactions, budgets and operational reporting."
    },
  ];

  displayedColumns: string[] = ['Participant', 'Programme', 'Payment', 'Status'];
  dataSource = new MatTableDataSource(this.registered);
}
