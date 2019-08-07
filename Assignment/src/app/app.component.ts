import { Component } from '@angular/core';
import { User } from './user';
import {EnrollService} from './enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  public hasError = true;
  public course =["angular" , "react", "vue","C#"];

  constructor(private enroll:EnrollService){};

  userDetails = new User('Rob','akwdjawjd@akfdjaljf.com',1234567890,'default','evening',true);

  formValidation(value){
    if(value==="default"){
      this.hasError = true;
    }
    else{
      this.hasError= false;
    }
  }

  onSubmit(){
    this.enroll.enroll(this.userDetails).subscribe(
      data => console.log("saawdawd",data),
      error => console.log("e",error))
  }

}
