import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ManageSkillsComponent } from './manage-skills/manage-skills.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

@NgModule({
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageSkillsComponent,
        ManageUsersComponent,
    ],
    imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
