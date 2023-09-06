import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipComponent } from './flip/flip.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [{ path:"flip",component:FlipComponent},
{path:"service", component:ServiceComponent}];


@NgModule({
  
  imports: [RouterModule.forRoot( [
  {path:"", redirectTo:"home",pathMatch:'full'  },
  {path:"home", component:HomeComponent},
  {path:"service", component:ServiceComponent}])],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
