import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {DataViewerDetailComponent, DataViewerRouterComponent, DataTabViewComponent,DataViewerLoaderComponent } from './component';
import {TranslateModule} from '@ngx-translate/core';
import {TooltipModule} from '@shared/module/tooltip/tooltip.module';



@NgModule({
    declarations: [
        DataViewerRouterComponent,
        DataTabViewComponent,
        DataViewerDetailComponent,
        DataViewerLoaderComponent
    ],
    exports: [
        DataViewerRouterComponent,
        DataViewerLoaderComponent
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        TranslateModule,
        TooltipModule
    ]
})
export class DataViewModule { }
