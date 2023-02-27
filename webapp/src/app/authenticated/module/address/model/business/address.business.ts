import {Business} from '@shared/model';

export interface Address extends Business {
    cp: string;
    road: string;
    town: string;
    country: string;
    complement: string;
    nb:string;
}