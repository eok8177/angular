import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Lpz } from "../lpz.interface";
import { LpzService } from '../lpz.service';


@Component({
  selector: 'app-lpz',
  templateUrl: './lpz.component.html',
  styleUrls: ['./lpz.component.css']
})
export class LpzComponent implements OnInit {
  @Input() lpz: Lpz;
  @Output() lpzDeleted: EventEmitter<Lpz> = new EventEmitter();
  editing = false;
  editValue = '';

  constructor(private lpzService: LpzService) { }

  ngOnInit() {
  }

  onEdit() {
    this.editing = true;
    this.editValue = this.lpz.name;
  }
  onUpdate() {
    this.lpzService.updateLpz(this.lpz.id, this.editValue)
      .subscribe(
        (lpz: Lpz) => {
          this.lpz.name = this.editValue;
          this.editValue = '';
        }
      );
    this.editing = false;
  }

  onCancel() {
    this.editValue = '';
    this.editing = false;
  }

  onDelete() {
    this.lpzService.deleteLpz(this.lpz.id)
      .subscribe(
        () => {
          this.lpzDeleted.emit(this.lpz);
          console.log('Lpz deleted');
        }
      );
  }
  

}
