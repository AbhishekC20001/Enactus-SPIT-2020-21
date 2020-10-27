import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

import { Home } from '../shared/home';
import { HomeService } from '../services/home.service';


import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {


  errMess: string;

  homes: Home[];

  constructor(
    private homeService: HomeService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {

    this.homeService.getHomeContent()
      .subscribe(homes => this.homes = homes,
        errmess => this.errMess = <any>errmess);


  }

}
