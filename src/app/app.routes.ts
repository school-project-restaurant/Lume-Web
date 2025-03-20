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
    { path: '**', redirectTo: '/home' } // Reindirizza a Home per rotte inesistenti
];
