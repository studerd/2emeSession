import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Address, AddressFormConfig} from '@address/model';
import {addressHelper} from '@address/helper';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {AddressCreatePayload} from '@address/model/payload';

@Component({
    selector: 'app-address-detail',
    templateUrl: './address-detail.component.html',
    styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent implements OnInit, OnDestroy {
    @Input() address?: Address = addressHelper.getEmpty();
    @Output() addressChange = new EventEmitter<AddressCreatePayload>();
    @Input() formConfig?: AddressFormConfig
    destroyers$ = new Subject<void>();

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.destroyers$.next();
        this.destroyers$.complete();
    }
}
