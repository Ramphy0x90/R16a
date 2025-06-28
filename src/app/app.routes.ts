import { Routes } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { NavBar } from './types/nav-bar';

export const enum ROUTES {
    HOME = "home",
    SERVICES = "services",
    CONTACT = "contact"
}

export const NAV_BAR_ROUTES: readonly NavBar[] = [
    { label: "Home", route: ROUTES.HOME },
    { label: "Services", route: ROUTES.SERVICES },
    { label: "Contact", route: ROUTES.CONTACT }
];

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }
];
