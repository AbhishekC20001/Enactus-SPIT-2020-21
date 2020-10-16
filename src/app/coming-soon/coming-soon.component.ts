import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ComingSoonComponent>) { }

  ngOnInit() {
  }


  

}
