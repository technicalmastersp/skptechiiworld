import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'our-work',
    loadComponent: () => import('./pages/our-work/our-work.component').then((m) => m.OurWorkComponent),
  },
  {
    path: 'technologies',
    loadComponent: () => import('./pages/technologies/technologies.component').then((m) => m.TechnologiesComponent),
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team.component').then((m) => m.TeamComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () => import('./pages/terms/terms.component').then((m) => m.TermsComponent),
  },
  { path: '**', redirectTo: '' },
];
