import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { User } from '../user';

@Component({
    selector: 'app-users-detail',
    templateUrl: './users-detail.component.html',
    styleUrls: ['./users-detail.component.scss'],
})
export class UsersDetailComponent implements OnInit {
    user!: User;
    editName = '';

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        public _dialogService: DialogService
    ) {}

    ngOnInit(): void {
        this._activatedRoute.data.subscribe((data) => {
            const user: User = data.user;
            this.editName = user.name;
            this.user = user;
        });
    }

    cancel(): void {
        this.goToUsers();
    }

    save(): void {
        this.user.name = this.editName;
        this.goToUsers();
    }

    goToUsers(): void {
        const userId = this.user ? this.user.id : null;
        this._router.navigate(['/users']);
    }

    canDeactivate(): Observable<boolean> | boolean {
        if (!this.user || this.user.name === this.editName) {
            return true;
        }

        return this._dialogService.confirm('Discard changes ?');
    }
}
