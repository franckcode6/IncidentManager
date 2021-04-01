import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Incident} from '../model/incident';
import {IncidentHttpService} from '../incident-http.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  incidents: Observable<Incident[]>;
  progIncident: Incident;

  constructor(private is: IncidentHttpService) {
  }

  ngOnInit(): void {
    this.incidents = this.is.findAll();
  }

  progressColor($event: Incident): void {
    this.progIncident = $event;
  }
}
