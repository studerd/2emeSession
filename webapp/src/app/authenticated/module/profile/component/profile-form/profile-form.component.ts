import {Component, Input} from '@angular/core';
import {DataViewerDetailComponent} from '@shared/module/data-view/component';
import {Profile, ProfileDetailFormConfig, ProfileDto} from '@profile/model';
import {profileHelper} from '@profile/helper/profile.helper';
import {FormType} from '@shared/module/form/model/enum';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '@shared/service';
import {ProfileService} from '@profile/service/profile.service';
import {AddressCreatePayload} from '@address/model/payload';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent extends DataViewerDetailComponent<Profile, ProfileDto, ProfileDetailFormConfig> {
  override helper = profileHelper
  @Input() override formMode = FormType.CREATE;

  public constructor(public activatedRouter: ActivatedRoute, public nav: NavigationService, public profileService: ProfileService) {
    super(activatedRouter, nav, profileService);
  }
}
