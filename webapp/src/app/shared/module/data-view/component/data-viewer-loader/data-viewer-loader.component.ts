import {Component, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {defaultBusiness} from '@shared/model';

@Component({
    selector: 'app-data-viewer-loader',
    templateUrl: './data-viewer-loader.component.html',
    styleUrls: ['./data-viewer-loader.component.scss']
})
export class DataViewerLoaderComponent {
    @Input() loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    @Input() detail: BehaviorSubject<any> = new BehaviorSubject<any>(defaultBusiness);
    @Input() loadingText: string = 'common.loading';
    @Input() noDataText: string = 'common.no-data';
}
