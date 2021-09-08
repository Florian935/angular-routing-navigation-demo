import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    message: string;

    constructor(public authService: AuthService, private _router: Router) {
        this.message = this.getMessage();
    }

    private getMessage(): string {
        return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login(): void {
        this.message = 'Trying to log in ...';

        this.authService.login().subscribe(() => {
            this.message = this.getMessage();

            if (this.authService.isLoggedIn) {
                const redirectUrl = this.authService.redirectUrl;
                const navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true,
                };

                this._router.navigate([redirectUrl], navigationExtras);
            }
        });
    }

    logout(): void {
        this.authService.logout();
        this.message = this.getMessage();
    }
}
