import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { JoinYra } from './components/join-yra/join-yra';
import { Register } from './components/register/register';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'signup', component: JoinYra },
    { path: 'register', component: Register },
    { path: 'about', loadComponent: () => import('./components/about/about').then((c) => c.About) },
    { path: 'programmes', loadComponent: () => import('./components/programmes/programmes').then((c) => c.Programmes) },
    { path: 'resources', canActivate:[authGuard], loadComponent: () => import('./components/resources/resources').then((c) => c.Resources) },
    { path: 'events', loadComponent: () => import('./components/events/events').then((c) => c.Events) },
    { path: 'media', canActivate:[authGuard], loadComponent: () => import('./components/media/media').then((c) => c.Media) },
    { path: 'opportunities', loadComponent: () => import('./components/opportunities/opportunities').then((c) => c.Opportunities) },
    { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard').then((c) => c.Dashboard) },
];
