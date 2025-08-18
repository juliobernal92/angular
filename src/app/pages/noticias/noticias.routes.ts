import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./noticias.component').then(m => m.NoticiasComponent),
  },
] as Routes;
