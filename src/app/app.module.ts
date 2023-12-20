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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
