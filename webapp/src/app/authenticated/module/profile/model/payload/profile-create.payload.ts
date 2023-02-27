import {Gender} from '@shared/model';
import {AddressCreatePayload} from '@address/model/payload';

export interface ProfileCreatePayload {
    firstname: string;
    lastname: string;
    phone: string;
    gender: Gender;
    address: AddressCreatePayload;
    email: string;

}