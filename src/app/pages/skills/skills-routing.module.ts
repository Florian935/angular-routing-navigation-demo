import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SkillListComponent } from './skill-list/skill-list.component';

const routes: Routes = [
    {
        path: 'skills',
        component: SkillListComponent,
        data: { animation: 'skills' },
    },
    {
        path: 'skill/:id',
        component: SkillDetailComponent,
        data: { animation: 'skill' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SkillsRoutingModule {}
