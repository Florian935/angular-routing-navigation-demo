import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SkillService } from '../services/skill.service';
import { Skill } from '../skill';

@Component({
    selector: 'app-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit {
    skills$!: Observable<Array<Skill>>;
    selectedId = 0;

    constructor(
        private _skillService: SkillService,
        private _activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.skills$ = this._activatedRoute.queryParamMap.pipe(
            switchMap((params: ParamMap) => {
                this.selectedId = +params.get('selected_id')!;

                return this._skillService.getSkills();
            })
        );
    }
}
