import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Work } from "../work.interface";
import { WorkService } from '../work.service';
import { NgForm } from '@angular/forms/';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input() work: Work;
  @Input() lpz;
  @Input() cat;
  @Output() workDeleted: EventEmitter<Work> = new EventEmitter();
  editing = false;

  constructor(private workService: WorkService) { }

  ngOnInit() {
    // console.log(this.catArray);
  }

  generateArray(obj) { // Generate array for Select form
    return Object.keys(obj).map((key) => { return obj[key] });
  }


  onEdit() {
    this.editing = true;
  }
  onUpdate(form: NgForm) {
    this.workService.updateWork(this.work.id, form.value)
      .subscribe(
        (work: Work) => {
          console.log('Work updated');
        }
      );
    this.editing = false;
  }

  onCancel() {
    this.editing = false;
  }

  onDelete() {
    if (confirm("Are you sure to delete " + this.work.invoice)) {
      this.workService.deleteWork(this.work.id)
        .subscribe(
          () => {
            this.workDeleted.emit(this.work);
            console.log('Work deleted');
          }
        );
    }
  }
  

}
