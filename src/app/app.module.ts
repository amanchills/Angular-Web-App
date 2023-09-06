import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { CarouselModule } from '@coreui/angular';
import {MatCardModule} from '@angular/material/card';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatDialogModule} from '@angular/material/dialog';
import { CarouselModule } from '@coreui/angular';
import { NgMarqueeModule } from 'ng-marquee';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { FlipComponent } from './flip/flip.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SuccessCardComponent } from './success-card/success-card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
// import { IvyCarouselModule } from "angular-responsive-carousel";
@NgModule({
  declarations: [
    AppComponent,
    FlipComponent,
    PresentationComponent,
    CarouselComponent,
    SuccessCardComponent,
    ContactUsComponent,
    ServiceComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [MatSelectModule,
    MatCheckboxModule,
    // IvyCarouselModule,
    MatButtonToggleModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    // MatCarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    CarouselModule,
    MatCardModule,
    MatDialogModule,
    NgbModule,
    MatMenuModule,
    NgApexchartsModule,
    MatTooltipModule,
    MatGridListModule,
    MatIconModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
