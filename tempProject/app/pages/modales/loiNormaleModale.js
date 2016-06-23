import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {ProbasFactory} from '../../factories/probasFactory';
import {AddIntervalModale} from './addIntervalModale';
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
    this.interval = [];
    this.probasFactory = new ProbasFactory();
    this.normaleForm = form.group({
      'ecartType': ['', Validators.compose([Validators.pattern('^[0-9]+(\.[0-9]+)?$'), Validators.required])],
      'esperance': ['', Validators.compose([Validators.pattern('^-?[0-9]+(\.[0-9]+)?$'), Validators.required])]
    });
    this.ecartType = this.normaleForm.controls['ecartType'];
    this.esperance = this.normaleForm.controls['esperance'];
    this.exec = false;

  }
  annuler() {
    this.viewCtrl.dismiss();
  }
  showAddIntervalModale() {
    let modal = Modal.create(AddIntervalModale);
    modal.onDismiss(data => {
      if(typeof data !== "undefined"){
          this.interval = data.interval;
      }
    });
    this.nav.present(modal);
  }
  calculLoiNormale() {
    this.resultProba = this.probasFactory.probaLoiNormale(this.interval, 0.001, Number(this.esperance._value), Number(this.ecartType._value));
    this.ecartTypeAffichage = this.ecartType._value;
    this.esperanceAffichage = this.esperance._value;
    this.exec = true;
  }

}
