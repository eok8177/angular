import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LpzComponent } from './lpz/lpz.component';
import { LpzsComponent } from './lpzs/lpzs.component';
import { NewLpzComponent } from './new-lpz/new-lpz.component';
import { routing } from './app.routing';
import { LpzService } from './lpz.service';

import { WorkComponent } from './work/work.component';
import { WorksComponent } from './works/works.component';
import { NewWorkComponent } from './new-work/new-work.component';
import { WorkService } from './work.service';


@NgModule({
  declarations: [
    AppComponent,

    LpzComponent,
    LpzsComponent,
    NewLpzComponent,

    WorkComponent,
    WorksComponent,
    NewWorkComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    LpzService,
    WorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
