import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'index',
        loadComponent: () =>
          import('../index/index.page').then((m) => m.IndexPage),
      },
      {
        path: 'groceries',
        loadComponent: () =>
          import('../groceries/groceries.page').then((m) => m.GroceriesPage),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/tabs/index',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/index',
    pathMatch: 'full',
  },
];
