import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
@Page({
  templateUrl: 'build/pages/modales/addEntreeSerieModale.html'
})
export class AddEntreeSerieModale {
  static get parameters() {
    return [
      [ViewController],
      [FormBuilder]
    ];
  }
  constructor(viewCtrl, form) {
    this.viewCtrl = viewCtrl;
    this.addEntreeSerieForm = form.group({
      'val': ['', Validators.compose([Validators.pattern('^-?[0-9]+(\.[0-9]+)?$'), Validators.required])],
      'eff': ['', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.required])]
    });
    this.val = this.addEntreeSerieForm.controls['val'];
    this.eff = this.addEntreeSerieForm.controls['eff'];
  }
  valider() {
    let data = {
      val: this.val._value,
      eff: this.eff._value
    };
    this.viewCtrl.dismiss(data);
  }
  annuler() {
    this.viewCtrl.dismiss();
  }

}
