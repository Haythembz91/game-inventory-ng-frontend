import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'add',
    loadComponent: () => import('./components/add-item/add-item').then(m => m.AddItem)
  },
  {
    path:'',
    loadComponent: () => import('./components/items-container/items-container').then(m => m.ItemsContainer)
  }

];
