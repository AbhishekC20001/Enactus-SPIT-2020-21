import { Component, OnInit, Inject } from '@angular/core';
import { Project } from '../shared/project';


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



  constructor(private projectService: ProjectService,
  @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects,
        errmess => this.errMess = <any>errmess);
  }


}
