import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { USERS } from '../mock-users';
import { User } from '../user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private _usersSource$: BehaviorSubject<Array<User>> = new BehaviorSubject<
        Array<User>
    >(USERS);

    constructor() {}

    getUsers(): Observable<Array<User>> {
        return this._usersSource$;
    }

    getUserById(id: number | string): Observable<User> {
        return this.getUsers().pipe(
            map((users) => users.find((user) => user.id === +id)!)
        );
    }
}
