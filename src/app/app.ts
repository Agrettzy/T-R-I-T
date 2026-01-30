import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
})

export class App {
    protected readonly title = signal('Bank-a');

    authService = inject(AuthService);

    ngOnInit() {
        const token = localStorage.getItem('token');
        if (token) {
            this.authService.checkStatus().subscribe();
        } else {
            this.authService.logout();
        }
    }

}
