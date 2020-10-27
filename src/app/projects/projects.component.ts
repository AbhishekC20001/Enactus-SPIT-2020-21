import { Component, OnInit, Inject } from '@angular/core';

import { Project } from '../shared/project';
import { Product } from '../shared/product';


import { ProjectService } from '../services/project.service';
import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})


export class ProjectsComponent implements OnInit {
  projects: Project[];
  errMess: string;

  products1: Product[];
  products2: Product[];



  constructor(private projectService: ProjectService,
  @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects,
        errmess => this.errMess = <any>errmess);

    this.projectService.getBambooProducts()
      .subscribe(products => this.products1 = products,
        errmess => this.errMess = <any>errmess);
    this.projectService.getCottonProducts()
      .subscribe(products => this.products2 = products,
        errmess => this.errMess = <any>errmess);
  }


}
