import {Business} from '@shared/model';
import {DataViewerActionConfig} from './data-viewer-action.config';
import {Observable} from 'rxjs';

export interface DataViewerListConfig {
    data: Observable<Business[]>;
    detailCallBack: Function;
    actions: DataViewerActionConfig[];
}