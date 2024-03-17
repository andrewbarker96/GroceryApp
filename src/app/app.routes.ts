import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'index',
    loadComponent: () => import('./index/index.page').then( m => m.IndexPage)
  },
  {
    path: 'groceries',
    loadComponent: () => import('./groceries/groceries.page').then( m => m.GroceriesPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.page').then( m => m.CartPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
];
