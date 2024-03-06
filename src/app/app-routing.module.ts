import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MySectionComponent } from './components/my-section/my-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProyectsSectionComponent } from './components/proyects-section/proyects-section.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:MySectionComponent},
  {path:'aboutme',component:AboutSectionComponent},
  {path:'project',component:ProyectsSectionComponent},
  
  {path:'**',redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
