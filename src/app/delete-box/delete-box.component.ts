import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-box',
  templateUrl: './delete-box.component.html',
  styleUrls: ['./delete-box.component.css']
})
export class DeleteBoxComponent implements OnInit {

  @Input() inputid: number;
  @Input() inputtitle: string;
  @Output() actionEvt = new EventEmitter<boolean>();
  inputValue = '';


  constructor() {
  }

  cancelRemove(): void {
    this.actionEvt.emit(false);
  }

  confirmRemove(): void {
    this.actionEvt.emit(true);
  }

  ngOnInit(): void {
  }

}
