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
import { SmartTvComponent } from './smart-tv/smart-tv.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SmartwatchComponent } from './smartwatch/smartwatch.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { MacbookComponent } from './macbook/macbook.component';
import { IpadComponent } from './ipad/ipad.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ShoesComponent } from './shoes/shoes.component';


const routes: Routes = [
{path :'iphone', component:IphoneComponent} , 
{ path: 'head-nav', component:HeadNavComponent},
{ path: 'galaxy', component:GalaxyComponent}, 
{ path: 'poco', component:PocoComponent},
{ path: 'redmi', component:RedmiComponent},
{ path: 'vivo', component:VivoComponent},
{ path: 'oppo', component:OppoComponent},
{ path: 'realme', component:RealmeComponent},
{ path: 'smart-tv', component:SmartTvComponent},
{path:'home-appliances', component:HomeAppliancesComponent},
{path:'laptop',component:LaptopComponent},
{path:'smartwatch',component:SmartwatchComponent},
{path:'headphones',component:HeadphonesComponent},
{path:'macbook',component:MacbookComponent},
{path:'ipad',component:IpadComponent},
{path:'appliances',component:AppliancesComponent},
{path:'shoes',component:ShoesComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
