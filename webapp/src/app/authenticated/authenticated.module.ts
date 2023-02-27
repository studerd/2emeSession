import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { AuthenticatedRouterComponent } from '@dashboard/router';
import { HomePageComponent } from '@dashboard/page';


@NgModule({
  declarations: [
    AuthenticatedRouterComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule, TranslateModule,
    AuthenticatedRoutingModule
  ]
})
export class AuthenticatedModule { }
