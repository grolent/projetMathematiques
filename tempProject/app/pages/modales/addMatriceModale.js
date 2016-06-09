import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
@Page({
  templateUrl: 'build/pages/modales/addMatriceModale.html'
})
export class AddMatriceModale {
  static get parameters() {
    return [
      [ViewController],
      [FormBuilder]
    ];
  }
  constructor(viewCtrl, form) {
    this.viewCtrl = viewCtrl;

    this.addMatriceForm = form.group({
      'nom': ['', Validators.required],
      'm': ['', Validators.required],
      'n': ['', Validators.required]
    });
    this.nom = this.addMatriceForm.controls['nom'];
    this.m = this.addMatriceForm.controls['m'];
    this.n = this.addMatriceForm.controls['n'];
  }
  valider() {
    let data = {
      nom: this.nom._value, 
      m: parseInt(this.m._value),
      n: parseInt(this.n._value)
    };
    this.viewCtrl.dismiss(data);
  }
  annuler() {
    this.viewCtrl.dismiss();
  }


}
