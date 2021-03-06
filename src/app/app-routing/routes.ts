import { Routes } from '@angular/router';

//import { MenuComponent } from '../menu/menu.component';
//import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SidenavListComponent } from '../navigation/sidenav-list/sidenav-list.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'projects',     component: ProjectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contactus',     component: ContactComponent },
  { path: 'aboutus',     component: AboutComponent },

  { path: 'sidenav-list',     component: SidenavListComponent },
  //{ path: 'dishdetail/:id',     component: DishdetailComponent },
];
