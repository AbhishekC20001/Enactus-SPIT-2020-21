import { Component, OnInit, Output, EventEmitter,Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComingSoonComponent } from '../coming-soon/coming-soon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public dialog: MatDialog,
  @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  openComingSoon() {
    this.dialog.open(ComingSoonComponent, {width: '500px', height: '450px'});
  }
}
