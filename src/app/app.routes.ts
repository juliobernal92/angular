import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'noticias',
    loadComponent: () =>
      import('./pages/noticias/noticias.component').then(m => m.NoticiasComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];