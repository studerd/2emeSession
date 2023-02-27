import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedRouterComponent} from '@dashboard/router';

const routes: Routes = [
    {
        path: '',
        component: AuthenticatedRouterComponent,
        children: [{path: '', loadChildren: () => import('./module/profile/profile.module').then(m => m.ProfileModule)}]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticatedRoutingModule {
}
