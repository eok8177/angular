import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-new-work',
  templateUrl: './new-work.component.html',
  styleUrls: ['./new-work.component.css']
})
export class NewWorkComponent implements OnInit {
  works = [];
  lpz = [];
  cat = [];

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.workService.getWorks()
      .subscribe(
        (response) => {
          this.works = response.work;
          this.lpz = response.lpz;
          this.cat = response.cat;
        },
        (error: Response) => console.log(error)
    );
  }

  generateArray(obj) { // Generate array for Select form
    return Object.keys(obj).map((key) => { return obj[key] });
  }

  onSubmit(form: NgForm) {
    this.workService.addWork(form.value)
     .subscribe(
       () => alert('Work created')
     );
    form.reset;
  }

}
