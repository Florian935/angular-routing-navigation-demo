import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-greeting',
    templateUrl: './greeting.component.html',
    styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
    fragment$!: Observable<string>;

    constructor(private _activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.fragment$ = this._activatedRoute.fragment.pipe(
            map((fragment: string | null) => fragment || 'None')
        );
    }
}
