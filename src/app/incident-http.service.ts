import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Incident} from './model/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentHttpService {

  url = 'http://localhost:8080/learn/api/incidents';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.url);
  }

  findOne(id: number): Observable<Incident> {
    return this.http.get<Incident>(`${this.url}/${id}`);
  }

  add(i: Incident): Observable<Incident> {
    return this.http.post<Incident>(this.url, i);
  }

  delete(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${this.url}/${id}`);
  }
}
