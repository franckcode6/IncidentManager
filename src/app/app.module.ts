import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';
import { IncidentAddComponent } from './incident-add/incident-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { DeleteBoxComponent } from './delete-box/delete-box.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const routes: Routes = [
  {path: 'incidents', component: IncidentListComponent},
  {path: 'incidents/add', component: IncidentAddComponent},
  {path: 'incidents/:id', component: IncidentDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'incidents', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    IncidentListComponent,
    IncidentDetailComponent,
    IncidentAddComponent,
    PageNotFoundComponent,
    HomeComponent,
    MenuComponent,
    DeleteBoxComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
