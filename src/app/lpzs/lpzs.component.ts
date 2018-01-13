import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Lpz } from '../lpz.interface';
import { LpzService } from "../lpz.service";


@Component({
  selector: 'app-lpzs',
  templateUrl: './lpzs.component.html',
  styleUrls: ['./lpzs.component.css']
})
export class LpzsComponent implements OnInit {
	lpzs: Lpz[];

  constructor(private lpzService: LpzService) { }

  ngOnInit() {
  }

  onGetLpzs() {
    this.lpzService.getLpzs()
    .subscribe(
      (lpz: Lpz[]) => this.lpzs = lpz,
      (error: Response) => console.log(error)
    );
  }

  onDeleted(lpz: Lpz) {
    const position = this.lpzs.findIndex(
      (lpzEl: Lpz) =>{
        return lpzEl.id == lpz.id;
      }
    );
    this.lpzs.splice(position, 1);
  }

}
