import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillsRoutingModule } from './skills-routing.module';

@NgModule({
    declarations: [SkillDetailComponent, SkillListComponent],
    imports: [CommonModule, FormsModule, SkillsRoutingModule],
})
export class SkillsModule {}
