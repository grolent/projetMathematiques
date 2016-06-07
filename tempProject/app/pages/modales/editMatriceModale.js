import {Modal, NavController, Page, ViewController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
@Page({
  templateUrl: 'build/pages/modales/editMatriceModale.html'
})
export class EditMatriceModale {
  static get parameters() {
    return [
      [ViewController],
      [FormBuilder],
      [NavParams]
    ];
  }
  constructor(viewCtrl, form, params) {
    this.viewCtrl = viewCtrl;
    this.matrice = params.get('matrice');
    console.log(this.matrice);
  }
  annuler() {
    this.viewCtrl.dismiss();
  }


}
