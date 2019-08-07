import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppTestComponent } from './app-test/app-test.component';
import { EmpDComponent } from './emp-d/emp-d.component';


@NgModule({
  declarations: [
    AppComponent,
    AppTestComponent,
    EmpDComponent
  ],
  exports:[AppTestComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
