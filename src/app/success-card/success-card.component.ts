import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '.app-success-card',
  templateUrl: './success-card.component.html',
  styleUrls: ['./success-card.component.css']
})
export class SuccessCardComponent {
  previewList=[1,2,3].map((n) => `./assets/s${n}.png`);
  previewSize={"width":"100%", "height":"400px"}
  cardSize={"width":"98%", "height":"235px"}
  constructor(public  config: NgbCarouselConfig) {
    this.config.interval = 3000;
    this.config.wrap = true;
    this.config.keyboard = true;
  }
}
