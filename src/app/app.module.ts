import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './home/home.component';
import { PageConfigurationDetailComponent } from './pages/page-configuration-detail/page-configuration-detail.component';
import { ControlConfigurationComponent } from './pages/control-configuration/control-configuration.component';
import { PopUpControlConfigurationComponent } from './pages/configuration/pop-up-control-configuration/pop-up-control-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    PageConfigurationDetailComponent,
    ControlConfigurationComponent,
    PopUpControlConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
