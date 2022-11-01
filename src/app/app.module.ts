import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { ScreenComponent } from './components/screen/screen.component';
import { BannerprofissionalComponent } from './components/bannerprofissional/bannerprofissional.component';
import { BannerbasicComponent } from './components/bannerbasic/bannerbasic.component';

schemas: [
  CUSTOM_ELEMENTS_SCHEMA]

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ScreenComponent,
    BannerprofissionalComponent,
    BannerbasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
