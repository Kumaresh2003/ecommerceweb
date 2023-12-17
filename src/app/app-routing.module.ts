import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IphoneComponent } from './iphone/iphone.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { PocoComponent } from './poco/poco.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path :'iphone', component:IphoneComponent
   
  } , 
  { path: 'head-nav', component:HeadNavComponent},
{ path: 'galaxy', component:GalaxyComponent}, 
{ path: 'poco', component:PocoComponent},
{ path: 'home', component:HomeComponent},

{ path: 'Home', component:HomeComponent}, 
{path:'',redirectTo:'/home',pathMatch:'full'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
