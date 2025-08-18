import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes'), // export default
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.routes'), // export default
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home' } // opcional 404
];
