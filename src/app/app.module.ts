import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeadNavComponent } from './head-nav/head-nav.component';
import { AllProducetComponent } from './all-producet/all-producet.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { IphoneComponent } from './iphone/iphone.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { PocoComponent } from './poco/poco.component';
import { RedmiComponent } from './redmi/redmi.component';
import { VivoComponent } from './vivo/vivo.component';
import { RealmeComponent } from './realme/realme.component';
import { OppoComponent } from './oppo/oppo.component';
import { HomeHeadComponent } from './home-head/home-head.component';
import { SmartTvComponent } from './smart-tv/smart-tv.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SmartwatchComponent } from './smartwatch/smartwatch.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { MacbookComponent } from './macbook/macbook.component';
import { IpadComponent } from './ipad/ipad.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ShoesComponent } from './shoes/shoes.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeadNavComponent,
    AllProducetComponent,
    HomeBannerComponent,
    IphoneComponent,
    GalaxyComponent,
    PocoComponent,
    RedmiComponent,
    VivoComponent,
    RealmeComponent,
    OppoComponent,
    HomeHeadComponent,
    SmartTvComponent,
    HomeAppliancesComponent,
    LaptopComponent,
    SmartwatchComponent,
    HeadphonesComponent,
    MacbookComponent,
    IpadComponent,
    AppliancesComponent,
    ShoesComponent,


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
