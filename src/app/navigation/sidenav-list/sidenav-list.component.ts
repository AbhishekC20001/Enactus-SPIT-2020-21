import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

  //sidenav: Promise<boolean>;
  public sidenav: MatSidenav;
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
