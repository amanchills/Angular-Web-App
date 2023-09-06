import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {


  previewList=[1,2,3].map((n) => `./assets/sc${n}.jpg`);
  previewSize={"width":"100%", "height":"400px"}
}
