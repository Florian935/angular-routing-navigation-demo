import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';
import { User } from '../user';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class UserDetailResolverService implements Resolve<User> {
    constructor(private _userService: UserService, private _router: Router) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): User | Observable<User> | Promise<User> {
        const id: string = route.paramMap.get('id')!;

        return this._userService.getUserById(id).pipe(
            first(),
            mergeMap((user) => {
                if (user) {
                    return of(user);
                }

                this._router.navigate(['/users']);

                return EMPTY;
            })
        );
    }
}
