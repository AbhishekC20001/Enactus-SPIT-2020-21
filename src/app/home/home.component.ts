
import { Component, OnInit, Inject } from '@angular/core';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';


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

  leader: Leader;
  leaderErrMess: string;

  constructor(
    private leaderservice: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.leaderservice.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
      errmess => this.leaderErrMess = <any>errmess);
  }

}
