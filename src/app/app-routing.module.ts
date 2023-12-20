import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IphoneComponent } from './iphone/iphone.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { PocoComponent } from './poco/poco.component';
import { RedmiComponent } from './redmi/redmi.component';
import { VivoComponent } from './vivo/vivo.component';
import { OppoComponent } from './oppo/oppo.component';
import { RealmeComponent } from './realme/realme.component';


const routes: Routes = [
  {
    path :'iphone', component:IphoneComponent
   
  } , 
  { path: 'head-nav', component:HeadNavComponent},
{ path: 'galaxy', component:GalaxyComponent}, 
{ path: 'poco', component:PocoComponent},
{ path: 'redmi', component:RedmiComponent},
{ path: 'vivo', component:VivoComponent},
{ path: 'oppo', component:OppoComponent},
{ path: 'realme', component:RealmeComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
