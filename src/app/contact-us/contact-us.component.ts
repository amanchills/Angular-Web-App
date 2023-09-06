import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  @Input("name") name:any;
  email = new FormControl('', [Validators.required, Validators.email]);
  fName = new FormControl('', [Validators.required]);
  orgName = new FormControl('', [Validators.required]);
  desc = new FormControl('', [Validators.required]);
  lName = new FormControl('');
  mobileNo = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  requestType:string="";
  requestTypeList:string[]=["Service Requird","Business Equiry", "Partnership", "Others"]
  checked:boolean=false;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter valid value';
    }

    if(this.fName.hasError('required')){
      return 'You must enter valid value';
    }
    if(this.mobileNo.hasError('required')){
      return 'You must enter valid value';
    }
    if(this.orgName.hasError('required')){
      return 'You must enter valid value';
    }
    

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}
