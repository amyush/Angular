import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-app-test',
  template: `<div>
                {{"adawd" + textarea }}
            </div>
            <button (click)="reflect()">ajkdjawdi</button>
            {{textarea}}`,
  styleUrls: ['./app-test.component.css']
})
export class AppTestComponent implements OnInit {

  public textarea = "";
  constructor() { }

  ngOnInit() {
  }
  reflect(){
    this.textarea = "name";
  }
}
