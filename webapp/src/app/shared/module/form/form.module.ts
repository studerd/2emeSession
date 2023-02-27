import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormInputComponent, InputDetailComponent} from './component/';


@NgModule({
    declarations: [FormInputComponent, InputDetailComponent],
    exports: [
        FormInputComponent,
        InputDetailComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule
    ]
})
export class FormModule {
}
