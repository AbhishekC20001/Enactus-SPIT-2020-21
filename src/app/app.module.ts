import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';

import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


import { LeaderService } from './services/leader.service';
import { ProjectService } from './services/project.service';
import { HomeService } from './services/home.service';


import { AppRoutingModule } from './app-routing/app-routing.module';

import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { baseURL } from './shared/baseurl';
import { HighlightDirective } from './directives/highlight.directive';
import { ProjectsComponent } from './projects/projects.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


import {MatTabsModule} from '@angular/material/tabs';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    HighlightDirective,
    ProjectsComponent,
    ComingSoonComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
  ],
  providers: [
    LeaderService,
    ProcessHTTPMsgService,
    ProjectService,
    HomeService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  entryComponents: [
    ComingSoonComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
