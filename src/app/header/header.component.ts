import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComingSoonComponent } from '../coming-soon/coming-soon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openComingSoon() {
    this.dialog.open(ComingSoonComponent, {width: '500px', height: '450px'});
  }
}
