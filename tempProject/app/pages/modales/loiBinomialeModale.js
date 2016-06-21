import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {ProbasFactory} from '../../factories/probasFactory';
@Page({
  templateUrl: 'build/pages/modales/loiBinomialeModale.html'
})
export class LoiBinomialeModale {
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
    this.binomialeForm = form.group({
      'n': ['', Validators.compose([Validators.pattern('^[1-9][0-9]*$'), Validators.required])],
      'p': ['', Validators.compose([Validators.pattern('^(0\.[0-9]+)|1$'), Validators.required])],
      'k': ['', Validators.compose([Validators.pattern('^[1-9][0-9]*$'), Validators.required])]
    });
    this.n = this.binomialeForm.controls['n'];
    this.p = this.binomialeForm.controls['p'];
    this.k = this.binomialeForm.controls['k'];
    this.exec = false;

  }
  annuler() {
    this.viewCtrl.dismiss();
  }
  calculLoiBinomiale() {
    this.result = this.probasFactory.loiBinomiale( Number(this.p._value), Number(this.n._value), Number(this.k._value) ).toFixed(3);
    this.exec = true;
  }
  isKok() {
    return (Number(this.k._value) <= Number(this.n._value));
  }

}
