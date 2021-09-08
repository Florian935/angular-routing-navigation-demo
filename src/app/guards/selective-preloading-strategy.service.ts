import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
    preloadedModules: Array<string> = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        const loadRoute = (delay: number) =>
            delay > 0 ? timer(delay * 1000).pipe(map(() => load())) : load();

        if (route.data && route.data.preload && route.path != null) {
            this.preloadedModules.push(route.path);
            console.log(`Preloaded: ${route.path}`);

            const delay = route.data.loadAfterSeconds
                ? route.data.loadAfterSeconds
                : 0;

            return loadRoute(delay);
        } else {
            return of(null);
        }
    }
}
