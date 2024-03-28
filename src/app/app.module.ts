import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MySectionComponent } from './components/my-section/my-section.component';
import { ProyectsSectionComponent } from './components/proyects-section/proyects-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { TagCanvasModule } from 'ng-tagcanvas';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FinalSectionComponent } from './components/final-section/final-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    MySectionComponent,
    ProyectsSectionComponent,
    AboutSectionComponent,
    SidebarComponent,
    FinalSectionComponent,
    FooterComponent,
    SidebarRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TagCanvasModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
