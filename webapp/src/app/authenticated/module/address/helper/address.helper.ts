import {Helper} from '@shared/contract';
import {Address, AddressDto, AddressFormConfig} from '../model';
import {AddressCreatePayload, AddressUpdatePayload} from '@address/model/payload';
import {FormControl, FormGroup} from '@angular/forms';

export class AddressHelper implements Helper<Address, AddressDto, AddressFormConfig> {
    fromDTO(dto: AddressDto): Address {
        return {
            complement: dto.complement,
            country: dto.country,
            cp: dto.cp,
            id: dto.address_id,
            road: dto.road,
            town: dto.town,
            isEmpty: false,
            toString: `${dto.road} ${dto.cp} ${dto.town}`,
            nb: dto.nb
        }
    }

    getEmpty(): Address {
        return {
            complement: '',
            country: '',
            cp: '',
            id: '',
            road: '',
            town: '',
            isEmpty: false,
            toString: 'common.no-address',
            nb: '0'
        }
    }

    toDTO(business: Address): AddressDto {
        return {
            complement: business.complement,
            country: business.country,
            cp: business.cp,
            address_id: business.id,
            road: business.road,
            town: business.town,
            nb: business.nb
        }
    }

    toDetailConfig(business: Address): AddressFormConfig {
        const formGroup = new FormGroup({
            cp: new FormControl(business.cp),
            road: new FormControl(business.road),
            town: new FormControl(business.town),
            country: new FormControl(business.country),
            complement: new FormControl(business.complement),
            nb: new FormControl(business.nb)
        });
        const translateKey = 'page.address-detail.';
        return {
            formGroup: formGroup,
            cp: {
                name: 'cp',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('cp')!) as unknown as FormControl
            },
            road: {
                name: 'road',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('road')!) as unknown as FormControl
            },
            town: {
                name: 'town',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('town')!) as unknown as FormControl
            },
            country: {
                name: 'country',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('country')!) as unknown as FormControl
            },
            complement: {
                name: 'complement',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('complement')!) as unknown as FormControl
            },
            nb: {
                name: 'nb',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('nb')!) as unknown as FormControl
            }
        }
    }

    formConfigToCreatePayload(detailFormConfig: AddressFormConfig): AddressCreatePayload {
        return {
            cp: detailFormConfig.cp.formControl.value,
            road: detailFormConfig.road.formControl.value,
            town: detailFormConfig.town.formControl.value,
            country: detailFormConfig.country.formControl.value,
            complement: detailFormConfig.complement.formControl.value,
            nb: detailFormConfig.nb.formControl.value,
        }
    }

    formConfigToUpdatePayload(business: Address, detailFormConfig: AddressFormConfig): AddressCreatePayload | AddressUpdatePayload {
        if (business.isEmpty) {
            return {

                cp: detailFormConfig.cp.formControl.value,
                road: detailFormConfig.road.formControl.value,
                town: detailFormConfig.town.formControl.value,
                country: detailFormConfig.country.formControl.value,
                complement: detailFormConfig.complement.formControl.value,
                nb: detailFormConfig.nb.formControl.value,
            }
        }
        return {
            address_id: business.id,
            cp: detailFormConfig.cp.formControl.value,
            road: detailFormConfig.road.formControl.value,
            town: detailFormConfig.town.formControl.value,
            country: detailFormConfig.country.formControl.value,
            complement: detailFormConfig.complement.formControl.value,
            nb: detailFormConfig.nb.formControl.value,
        }
    }

}

export const addressHelper = new AddressHelper();