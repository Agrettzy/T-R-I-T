import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { NotAuthenticatedGuard } from './auth/guards/not-authenticated.guard';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

export const routes: Routes = [

    {
        path: 'welcome',
        component: WelcomeComponent,
    },

    {
        path: 'auth',
        canMatch: [ NotAuthenticatedGuard ],
        loadChildren: () => import('./auth/auth.routes').then(m => m.default)
    },
    {
        path: 'bank',
        canActivate: [ isAuthenticatedGuard ],
        loadChildren: () => import('./bank/bank.routes').then(m => m.default)
    },

    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },

    {
        path: '**',
        redirectTo: '/welcome',
    }
];
