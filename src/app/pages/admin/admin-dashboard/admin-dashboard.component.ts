import { Component, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    NavigationExtras,
    ParamMap,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectivePreloadingStrategyService } from 'src/app/guards/selective-preloading-strategy.service';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
    sessionId$!: Observable<string>;
    token$!: Observable<string>;
    modules: Array<string> = [];

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _preloadStrategy: SelectivePreloadingStrategyService,
        private _router: Router
    ) {
        this.modules = this._preloadStrategy.preloadedModules;
    }

    ngOnInit(): void {
        this.sessionId$ = this._activatedRoute.queryParamMap.pipe(
            map((params: ParamMap) => {
                return params.get('session_id') || 'None';
            })
        );
    }

    goToGreetingCenter(fragment?: string): void {
        const greetingPath = '/greeting';

        if (!fragment) {
            this._router.navigate([greetingPath]);
        }

        const navigationExtras: NavigationExtras = {
            fragment,
        };

        this._router.navigate([greetingPath], navigationExtras);
    }
}
