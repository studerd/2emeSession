import {DetailForm} from '@shared/model';
import {AddressFormConfig} from '@address/model';
import {FormInputConfig} from '@shared/module/form/model';

export interface ProfileDetailFormConfig extends DetailForm {
    firstname: FormInputConfig
    lastname: FormInputConfig
    phone: FormInputConfig
    gender: FormInputConfig
    email: FormInputConfig;
    address: AddressFormConfig;
}