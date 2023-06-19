import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ProfileComponent, profileResolver, profileGuard } from './profile';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'trends',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: { profile: profileResolver },
    canActivate: [profileGuard],
  },
  {
    path: 'profile/:id',
    resolve: { profile: profileResolver },
    component: ProfileComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
