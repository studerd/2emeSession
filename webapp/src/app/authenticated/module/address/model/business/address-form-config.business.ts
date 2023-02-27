import {FormInputConfig} from '@shared/module/form/model';
import {DetailForm} from '@shared/model';

export interface AddressFormConfig extends DetailForm {
    cp: FormInputConfig
    road: FormInputConfig;
    town: FormInputConfig;
    country: FormInputConfig;
    complement: FormInputConfig;
    nb: FormInputConfig;
}