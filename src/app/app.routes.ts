import { Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { ChefComponent } from './chef/chef.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'staff', component: StaffComponent },
    { path: 'admin', component: AdministratorComponent },
    { path: 'chef', component: ChefComponent },
    { path: 'reservations', component: ReservationsComponent },
    { path: 'menu', component: MenuComponent },
    {
        path: 'menu/antipasti',
        loadComponent: () => import('./menu/antipasti/antipasti.component').then(m => m.AntipastiComponent)
    },
    {
        path: 'menu/primi-piatti',
        loadComponent: () => import('./menu/primi-piatti/primi-piatti.component').then(m => m.PrimiComponent)
    },
    {
        path: 'menu/secondi-piatti',
        loadComponent: () => import('./menu/secondi-piatti/secondi-piatti.component').then(m => m.SecondiComponent)
    },
    {
        path: 'menu/dessert',
        loadComponent: () => import('./menu/dessert/dessert.component').then(m => m.DessertComponent)
    },
    {
        path: 'menu/bevande',
        loadComponent: () => import('./menu/bevande/bevande.component').then(m => m.BevandeComponent)
    },
    { path: '**', redirectTo: '/home' }, // SEMPRE PER ULTIMA -> Reindirizza a Home per rotte inesistenti
];

