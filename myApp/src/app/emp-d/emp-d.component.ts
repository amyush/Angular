import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-emp-d',
  template: `
      <ul *ngFor="let d of details">
      <li>{{d.id}}</li></ul>
  `,
  styleUrls: ['./emp-d.component.css']
})
export class EmpDComponent implements OnInit {
  public details=[];
  constructor(public _empDe : EmployeeDetailsService) { }

  ngOnInit() {
    this.details = this._empDe.getDetails();
  }

}
