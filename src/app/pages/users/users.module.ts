import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { FormsModule } from '@angular/forms';
import { UserDetailResolverService } from './services/user-detail-resolver.service';

@NgModule({
    declarations: [
        UsersComponent,
        UsersHomeComponent,
        UsersListComponent,
        UsersDetailComponent,
    ],
    imports: [CommonModule, FormsModule, UsersRoutingModule],
})
export class UsersModule {}
