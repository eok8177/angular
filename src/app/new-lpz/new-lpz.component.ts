import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LpzService } from '../lpz.service';

@Component({
  selector: 'app-new-lpz',
  templateUrl: './new-lpz.component.html',
  styleUrls: ['./new-lpz.component.css']
})
export class NewLpzComponent implements OnInit {

  constructor(private lpzService: LpzService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.lpzService.addLpz(form.value.name)
     .subscribe(
       () => alert('Lpz created')
     );
    form.reset;
  }

}
