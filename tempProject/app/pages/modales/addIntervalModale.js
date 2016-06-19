import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
@Page({
  templateUrl: 'build/pages/modales/addIntervalModale.html'
})
export class AddIntervalModale {
  static get parameters() {
    return [
      [ViewController],
      [FormBuilder]
    ];
  }
  constructor(viewCtrl, form) {
    this.viewCtrl = viewCtrl;
    this.addIntervalForm = form.group({
      'min': ['', Validators.compose([Validators.pattern('^-?[0-9]+$'), Validators.required])],
      'max': ['', Validators.compose([Validators.pattern('^-?[0-9]+$'), Validators.required])]
    });
    this.min = this.addIntervalForm.controls['min'];
    this.max = this.addIntervalForm.controls['max'];
  }
  valider() {
    let data = {
      interval: [Number(this.min._value), Number(this.max._value)]
    };
    this.viewCtrl.dismiss(data);
  }
  annuler() {
    this.viewCtrl.dismiss();
  }
  bornesOk() {
    if(Number(this.min._value) < Number(this.max._value) ){
      return true;
    }
    else {
      return false;
    }
  }

}
