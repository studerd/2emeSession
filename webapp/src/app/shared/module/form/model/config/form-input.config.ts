import {FormControl} from '@angular/forms';

export interface FormInputConfig {
  icon?: string;
  name: string;
  css?: string;
  type: string;
  translateKey: string;
  formControl: FormControl;
}
