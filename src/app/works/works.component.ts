import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Work } from '../work.interface';
import { WorkService } from "../work.service";


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works: Work[];
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

  onDeleted(work: Work) {
    const position = this.works.findIndex(
      (workEl: Work) =>{
        return workEl.id == work.id;
      }
    );
    this.works.splice(position, 1);
  }

}
