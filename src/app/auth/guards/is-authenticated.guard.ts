import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, take, map } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);


    return toObservable(authService.authStatus).pipe(
        filter(status => status !== 'checking'),
        take(1),
        map(status => {
            if (status === 'authenticated') {
                return true;
            }

            router.navigate(['/welcome'], { queryParams: { returnUrl: state.url } });
            return false;
        })
    );

};
