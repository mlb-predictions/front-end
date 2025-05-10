// defines entire route configuration and will be passed to provideRouter() in main.ts.
import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
];
