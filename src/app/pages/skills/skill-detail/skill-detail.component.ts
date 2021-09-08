import { Component, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    NavigationExtras,
    ParamMap,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SkillService } from '../services/skill.service';
import { Skill } from '../skill';

@Component({
    selector: 'app-skill-detail',
    templateUrl: './skill-detail.component.html',
    styleUrls: ['./skill-detail.component.scss'],
})
export class SkillDetailComponent implements OnInit {
    skill$!: Observable<Skill>;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _skillService: SkillService
    ) {}

    ngOnInit(): void {
        this.skill$ = this._activatedRoute.paramMap.pipe(
            switchMap((params: ParamMap) => {
                return this._skillService.getSkillById(params.get('id')!);
            })
        );
    }

    goToSkills(skill: Skill): void {
        const skillId = skill ? skill.id : null;
        const navigationExtras: NavigationExtras = {
            queryParams: { selected_id: skillId },
            state: { selectedId: skillId },
        };
        this._router.navigate(['/skills'], navigationExtras);
    }
}
