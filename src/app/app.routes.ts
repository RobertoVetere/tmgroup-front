import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
   {
    path: 'customer',
    loadComponent: () => import('./pages/customers/customers.component').then(m => m.CustomersComponent),
  },
  {
    path: 'budget',
    loadComponent: () => import('./pages/budgets/budgets.component').then(m => m.BudgetsComponent),
  },
  {
    path: 'bills',
    loadComponent: () => import('./pages/bills/bills.component').then(m => m.BillsComponent),
  },
];
