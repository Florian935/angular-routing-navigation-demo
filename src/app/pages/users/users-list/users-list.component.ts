import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
    users$!: Observable<Array<User>>;
    selectedId = 0;

    constructor(
        private _userService: UserService,
        private _activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.users$ = this._activatedRoute.paramMap.pipe(
            switchMap((params) => {
                this.selectedId = +params.get('id')!;

                return this._userService.getUsers();
            })
        );
    }
}
