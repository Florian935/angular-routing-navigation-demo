import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
    sessionId$!: Observable<string>;
    token$!: Observable<string>;
    modules: Array<string> = [];

    constructor(private _activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.sessionId$ = this._activatedRoute.queryParamMap.pipe(
            map((params: ParamMap) => {
                return params.get('session_id') || 'None';
            })
        );

        this.token$ = this._activatedRoute.fragment.pipe(
            map((fragment: string | null) => fragment || 'None')
        );
    }
}
