import {Page} from 'ionic-angular';
import { FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl } from 'angular2/common';


@Page({
  templateUrl: 'build/pages/equation-degre-2/equation-degre-2.html',
  directives: [FORM_DIRECTIVES]
})
export class EquationDegre2 {

  authForm: ControlGroup;
  a: AbstractControl;
  b: AbstractControl;

  constructor(fb: FormBuilder) {
      this.authForm = fb.group({
          'a': ['', Validators.compose([Validators.required, Validators.minLength(8), checkFirstCharacterValidator])],
          'b': ['', Validators.compose([Validators.required, Validators.minLength(8), checkFirstCharacterValidator])]
      });

      this.a = this.authForm.controls['a'];
      this.b = this.authForm.controls['b'];
  }

  onSubmit(value: string): void {
      if(this.authForm.valid) {
          console.log('Submitted value: ', value);
      }
  }

  function checkFirstCharacterValidator(control: Control): { [s: string]: boolean } {
      if (control.value.match(/^\d/)) {
          return {checkFirstCharacterValidator: true};
      }
  }
}
