import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { UserDetailResolverService } from './services/user-detail-resolver.service';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UsersListComponent,
                children: [
                    {
                        path: ':id',
                        component: UsersDetailComponent,
                        canDeactivate: [CanDeactivateGuard],
                        resolve: {
                            user: UserDetailResolverService,
                        },
                    },
                    { path: '', component: UsersHomeComponent },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
