import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Incident} from '../model/incident';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
})
export class IncidentComponent implements OnInit {

  @Input() incident: Incident;
  @Output() eventEmit = new EventEmitter<Incident>();

  constructor() {
  }

  ngOnInit(): void {
    this.eventEmit.emit(this.incident);
  }

}
