import {Page, Modal, NavController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {StatistiquesFactory} from '../../factories/statistiquesFactory';
import {ProbasFactory} from '../../factories/probasFactory';
import {LoiUniformeModale} from '../modales/loiUniformeModale';
import {LoiBinomialeModale} from '../modales/loiBinomialeModale';

@Page({
  templateUrl: 'build/pages/probas/probas.html'
})
export class Probas {
  static get parameters() {
    return [
      [FormBuilder],
      [NavController]
    ];
  }
  constructor(form, nav) {
    this.nav = nav;

    this.statistiquesFactory = new StatistiquesFactory();
    this.probasFactory = new ProbasFactory();
  }

  showLoiUniformeModale() {
    let modal = Modal.create(LoiUniformeModale);
    this.nav.present(modal);
  }
  showLoiBinomialeModale() {
    let modal = Modal.create(LoiBinomialeModale);
    this.nav.present(modal);
  }



}
