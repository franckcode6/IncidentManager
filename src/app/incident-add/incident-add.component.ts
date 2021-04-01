import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IncidentHttpService} from '../incident-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-incident-add',
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css']
})
export class IncidentAddComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private is: IncidentHttpService, private router: Router) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', Validators.required],
      progress: [0, Validators.compose([Validators.min(0), Validators.max(100)])],
      type: ['', Validators.required],
      level: ['', Validators.required],
      open: ''
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.myForm.valid) {
      this.is.add(this.myForm.value).subscribe(() => this.router.navigateByUrl('/incidents'));
    } else {
      console.error('INVALID FORM');
    }
  }

}
