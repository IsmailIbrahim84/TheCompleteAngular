import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from "./Courses.Component";
import {FormsModule} from "@angular/forms";
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,CoursesComponent, SummaryPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
