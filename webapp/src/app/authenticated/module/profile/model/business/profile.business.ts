import {Business, Gender} from '@shared/model';
import {Address} from '@address/model';

export interface Profile extends Business {
    firstname: string;
    lastname: string;
    phone: string;
    gender: Gender;
    coachs: Profile[];
    address: Address;
    email:string;
}