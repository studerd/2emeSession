import {Helper} from '@shared/contract';
import {Profile, ProfileCreatePayload, ProfileDetailFormConfig, ProfileDto, ProfileUpdatePayload} from '@profile/model';
import {Gender} from '@shared/model';
import {addressHelper} from '@address/helper';
import {FormControl, FormGroup} from '@angular/forms';
import {isNil} from 'lodash';

class ProfileHelper implements Helper<Profile, ProfileDto, ProfileDetailFormConfig> {
    fromDTO(dto: ProfileDto): Profile {
        return {
            id: dto.profile_id,
            firstname: dto.firstname,
            lastname: dto.lastname,
            phone: dto.phone,
            gender: dto.gender,
            coachs: (!isNil(dto.coachs))? dto.coachs.map(c => this.fromDTO(c)):[],
            address: addressHelper.fromDTO(dto.address),
            isEmpty: false,
            toString: `${dto.lastname} ${dto.firstname}`,
            email: dto.email
        }
    }

    getEmpty(): Profile {
        return {
            id: '',
            firstname: '',
            lastname: '',
            phone: '',
            gender: Gender.OTHER,
            coachs: [],
            address: addressHelper.getEmpty(),
            isEmpty: false,
            toString: 'common.no-profile',
            email: ''
        }
    }

    toDTO(business: Profile): ProfileDto {
        return {
            profile_id: business.id,
            firstname: business.firstname,
            lastname: business.lastname,
            phone: business.phone,
            gender: business.gender,
            coachs: business.coachs.map(c => this.toDTO(c)),
            address: addressHelper.toDTO(business.address),
            email: business.email
        }
    }

    toDetailConfig(business: Profile): ProfileDetailFormConfig {
        const addressFormConfig = addressHelper.toDetailConfig(business.address);
        const formGroup = new FormGroup({
            firstname: new FormControl(business.firstname),
            gender: new FormControl(business.gender),
            lastname: new FormControl(business.lastname),
            phone: new FormControl(business.phone),
            email: new FormControl(business.email),
            address: addressFormConfig.formGroup
        });
        const translateKey = 'page.profile-detail.';
        return {
            formGroup: formGroup,
            firstname: {
                name: 'firstname',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('firstname')!) as unknown as FormControl
            },
            gender: {
                name: 'gender',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('gender')!) as unknown as FormControl
            },
            lastname: {
                name: 'lastname',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('lastname')!) as unknown as FormControl
            },
            phone: {
                name: 'phone',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('phone')!) as unknown as FormControl
            },
            email: {
                name: 'email',
                type: 'text',
                translateKey: translateKey,
                formControl: (formGroup.get('email')!) as unknown as FormControl
            },
            address: addressFormConfig


        };
    }

    formConfigToCreatePayload(detailFormConfig: ProfileDetailFormConfig): ProfileCreatePayload {
        return {
            firstname: detailFormConfig.firstname.formControl.value,
            lastname: detailFormConfig.lastname.formControl.value,
            phone: detailFormConfig.phone.formControl.value,
            gender: detailFormConfig.gender.formControl.value,
            address: addressHelper.formConfigToCreatePayload(detailFormConfig.address),
            email: detailFormConfig.email.formControl.value,
        }
    }

    formConfigToUpdatePayload(business: Profile, detailFormConfig: ProfileDetailFormConfig): ProfileUpdatePayload {
        return {
            profile_id: business.id,
            firstname: detailFormConfig.firstname.formControl.value,
            lastname: detailFormConfig.lastname.formControl.value,
            phone: detailFormConfig.phone.formControl.value,
            gender: detailFormConfig.gender.formControl.value,
            address: addressHelper.formConfigToUpdatePayload(business.address, detailFormConfig.address),
            email: detailFormConfig.email.formControl.value,
        }
    }

}

export const profileHelper = new ProfileHelper();