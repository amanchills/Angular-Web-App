import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig] ,  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "rotate(-20deg)"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotate(-20deg) rotateY(180deg)"
        })
      ),
      state(
        "matched",
        style({
          visibility: "false",
          transform: "scale(0.05)",
          opacity: 0
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")])
    ])
    ,
    trigger("cardsFlip", [
      state(
        "default",
        style({
          transform: "rotate(-70deg)"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotate(-70deg) rotateY(180deg)",
      
        })
      ),
      state(
        "matched",
        style({
          visibility: "false",
          transform: "scale(0.05)",
          opacity: 0
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")])
    ])
  ]
})
export class AppComponent implements OnInit {
  previewList=[1,2,3,4,5].map((n) => `./assets/c${n}.jpeg`);
  previewSize={"width":"100%", "height":"400px"}
  cardSize={"width":"30%", "height":"200px"}
count=[0,1,2,3]
  flipped!: boolean;
  constructor(public dialog: MatDialog,config: NgbCarouselConfig, router:Router) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
 
  positionOptions: TooltipPosition[] = ['right'];
  position = new FormControl(this.positionOptions[0]);
  space=" "
  newsFeed="Web design required."
  newsFeed2="backend developer required."
  title = 'web-app';
  slides: any[] = [0,1,2,3]
  details="1. Experienced in Spring angular <br> 2.fsdgbjfhsgjhfsf"
  isHover:boolean=false
  isHover2:boolean=false
  isHover3:boolean=false
  isHover4:boolean=false
  cardClass="crd"
  cardClass2="crda"
  cardClass3="crdb"
  cardClass4="crdc"
  list="hghghghg"
  call(){
    this.isHover=true
    this.cardClass="crd-hover"
    console.log("hghgvhg")
  }
  leave(){
    this.cardClass="crd"
    this.isHover=false
  }

  call2(){
    this.isHover2=true
    this.cardClass2="crd-hover2"
    console.log("hghgvhg")
  }
  leave2(){
    this.cardClass2="crda"
    this.isHover2=false
  }

  call3(){
    this.isHover3=true
    this.cardClass3="crd-hover3"
    console.log(this.isHover3)
  }
  leave3(){
    this.cardClass3="crdb"
    this.isHover3=false
    console.log(this.isHover3)
  }
  call4(){
    this.isHover4=true
    this.cardClass4="crd-hover4"
    console.log("hghgvhg")
  }
  leave4(){
    this.cardClass4="crdc"
    this.isHover4=false
  }
  open(){
  
  }

  close(){
    // this.dialog.closeAll()
  }

  ngOnInit() {

    this.flipped = false;
  }


chartSeries: ApexNonAxisChartSeries = [12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: false
    }
  };

  chartLabels = ["Apple", "Microsoft", "Facebook", "Google"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Leading Companies',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }


  data: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  data1: CardData = {
    imageId: "pDGNBK9A0sk1",
    state: "default"
  };
  

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
  card1Clicked() {
    if (this.data1.state === "default") {
      this.data1.state = "flipped";
    } else {
      this.data1.state = "default";
    }
  }
}


export interface CardData {
  imageId: string;
  state: "default" | "flipped" | "matched";
}