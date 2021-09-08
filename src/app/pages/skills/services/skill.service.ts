import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/services/message.service';
import { SKILLS } from '../mock-skills';
import { Skill } from '../skill';

@Injectable({
    providedIn: 'root',
})
export class SkillService {
    constructor(private _messageService: MessageService) {}

    getSkills(): Observable<Array<Skill>> {
        this._messageService.add('SkillService: fetched skills');

        return of(SKILLS);
    }

    getSkillById(id: number | string): Observable<Skill> {
        return this.getSkills().pipe(
            map((skills: Array<Skill>) => {
                return skills.find((skill) => skill.id === +id)!;
            })
        );
    }
}
