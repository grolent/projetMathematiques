import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {ProbasFactory} from '../../factories/probasFactory';
@Page({
  templateUrl: 'build/pages/modales/loiNormaleModale.html'
})
export class LoiNormaleModale {
  static get parameters() {
    return [
      [ViewController],
      [FormBuilder],
      [NavController]
    ];
  }
  constructor(viewCtrl, form, nav) {
    this.viewCtrl = viewCtrl;
    this.nav = nav;
    this.probasFactory = new ProbasFactory();
    this.normaleForm = form.group({
      'ecartType': ['', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.required])],
      'esperance': ['', Validators.compose([Validators.pattern('^-?[0-9]+$'), Validators.required])],
      'k': ['', Validators.compose([Validators.pattern('^-?[0-9]+$'), Validators.required])]
    });
    this.ecartType = this.normaleForm.controls['ecartType'];
    this.esperance = this.normaleForm.controls['esperance'];
    this.k = this.normaleForm.controls['k'];
    this.exec = false;

  }
  annuler() {
    this.viewCtrl.dismiss();
  }
  calculLoiNormale() {
    this.result = this.probasFactory.loiNormale( Number(this.esperance._value), Number(this.ecartType._value), Number(this.k._value) ).toFixed(3);
    this.ecartTypeAffichage = this.ecartType._value;
    this.esperanceAffichage = this.esperance._value;
    this.kAffichage = this.k._value;
    this.exec = true;
  }

}
