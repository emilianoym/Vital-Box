import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Paquetes } from './views/paquetes/paquetes';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'paquetes', component: Paquetes },
];
