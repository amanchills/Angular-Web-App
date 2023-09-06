import { Component, Input, VERSION, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig] ,  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {

  // images = [1,2,3,4].map((n) => `./assets/img${n}.jpeg`);
  // count=[0,1,2,3]
  //   flipped!: boolean;
  //   constructor(public dialog: MatDialog,config: NgbCarouselConfig, router:Router) {
  //     // customize default values of carousels used by this component tree
  //     config.interval = 2000;
  //     config.keyboard = true;
  //     config.pauseOnHover = true;
  //   }
  //   positionOptions: TooltipPosition[] = ['right'];
  //   position = new FormControl(this.positionOptions[0]);
  //   space=" "
  //   newsFeed="Web design required."
  //   newsFeed2="backend developer required."
  //   title = 'web-app';
  //   slides: any[] = [0,1,2,3]
  //   details="1. Experienced in Spring angular <br> 2.fsdgbjfhsgjhfsf"


  // isHover:boolean=false
  // isHover2:boolean=false
  // isHover3:boolean=false
  // isHover4:boolean=false
  // cardClass="crd"
  // cardClass2="crda"
  // cardClass3="crdb"
  // cardClass4="crdc"
  // call(){
  //   this.isHover=true
  //   this.cardClass="crd-hover"
  //   console.log("hghgvhg")
  // }
  // leave(){
  //   this.cardClass="crd"
  //   this.isHover=false
  // }

  // call2(){
  //   this.isHover2=true
  //   this.cardClass2="crd-hover2"
  //   console.log("hghgvhg")
  // }
  // leave2(){
  //   this.cardClass2="crda"
  //   this.isHover2=false
  // }

  // call3(){
  //   this.isHover3=true
  //   this.cardClass3="crd-hover3"
  //   console.log(this.isHover3)
  // }
  // leave3(){
  //   this.cardClass3="crdb"
  //   this.isHover3=false
  //   console.log(this.isHover3)
  // }
  // call4(){
  //   this.isHover4=true
  //   this.cardClass4="crd-hover4"
  //   console.log("hghgvhg")
  // }
  // leave4(){
  //   this.cardClass4="crdc"
  //   this.isHover4=false
  // }
  // open(){
  
  // }

  // close(){
  //   // this.dialog.closeAll()
  // }


  // name = 'Angular ' + VERSION.major;
  
  // images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // constructor(config: NgbCarouselConfig) {
  //   // customize default values of carousels used by this component tree
  //   config.interval = 2000;
  //   config.keyboard = true;
  //   config.pauseOnHover = true;
  // }
  // @ViewChild('myCarousel') myCarousel!: NgbCarousel;
  

  @Input("previewList") previewList!:string[]
  
  constructor(public  config: NgbCarouselConfig) {
    this.config.interval = 2000;
    this.config.wrap = true;
    this.config.keyboard = true;
  }
@Input("size") size:any
  // size={"width":"100%", "height":"400px"}
  ngOnInit() {
  }
}
