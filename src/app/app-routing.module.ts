import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SelectivePreloadingStrategyService } from './guards/selective-preloading-strategy.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './pages/popup/compose-message.component';

const routes: Routes = [
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup',
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./pages/admin/admin.module').then((m) => m.AdminModule),
        canLoad: [AuthGuard],
    },
    {
        path: 'users',
        loadChildren: () =>
            import('./pages/users/users.module').then((m) => m.UsersModule),
        data: { preload: true, loadAfterSeconds: 5 },
    },
    {
        path: '',
        redirectTo: 'skills',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: SelectivePreloadingStrategyService,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
