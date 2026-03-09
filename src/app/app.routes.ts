import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { AppreciationComponent } from './pages/appreciation/appreciation.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'appreciation', component: AppreciationComponent },
  { path: '**', redirectTo: '' }
];
