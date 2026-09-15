import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'TechNova Studio | Web Development Company',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services | TechNova Studio',
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent),
    title: 'Products | TechNova Studio',
  },
  {
    path: 'our-work',
    loadComponent: () => import('./pages/our-work/our-work.component').then((m) => m.OurWorkComponent),
    title: 'Our Work | TechNova Studio',
  },
  {
    path: 'technologies',
    loadComponent: () => import('./pages/technologies/technologies.component').then((m) => m.TechnologiesComponent),
    title: 'Technologies | TechNova Studio',
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team.component').then((m) => m.TeamComponent),
    title: 'Our Team | TechNova Studio',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | TechNova Studio',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact | TechNova Studio',
  },
  { path: '**', redirectTo: '' },
];
