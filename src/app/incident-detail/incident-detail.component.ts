import {Component, OnInit} from '@angular/core';
import {Incident} from '../model/incident';
import {ActivatedRoute, Router} from '@angular/router';
import {IncidentHttpService} from '../incident-http.service';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit {

  incident!: Incident;
  deletedBox = false;

  constructor(private activatedRoute: ActivatedRoute, private is: IncidentHttpService, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('fetch from api id:', id);
    this.is.findOne(Number(id)).subscribe(incident => this.incident = incident);
  }

  getEtatFromParent(etat: boolean): void {
    if (etat) {
      this.delete();
    } else {
      this.deletedBox = false;
    }
  }

  delete(): void {
    this.is.delete(this.incident.id).subscribe(result => this.router.navigateByUrl('/incidents'));
  }

}
