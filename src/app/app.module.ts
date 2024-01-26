import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeadNavComponent } from './head-nav/head-nav.component';
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
import { ToysComponent } from './toys/toys.component';
import { ContactComponent } from './contact/contact.component';
import { AllMobliesComponent } from './all-moblies/all-moblies.component';
import { HomeComponent } from './home/home.component';
import { AllElectronicsComponent } from './all-electronics/all-electronics.component';
import { TodayDealComponent } from './today-deal/today-deal.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';






@NgModule({
  declarations: [
    AppComponent,
    
    HeadNavComponent,
   
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
    ToysComponent,
    ContactComponent,
    AllMobliesComponent,
    HomeComponent,
    AllElectronicsComponent,
    TodayDealComponent,
    RegisterComponent,
    LoginComponent,
   
   



  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
