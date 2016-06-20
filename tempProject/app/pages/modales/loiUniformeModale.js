import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {AddIntervalModale} from './addIntervalModale';
import {ProbasFactory} from '../../factories/probasFactory';
@Page({
  templateUrl: 'build/pages/modales/loiUniformeModale.html'
})
export class LoiUniformeModale {
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
    this.interval1 = [];
    this.interval2 = [];
  }
  annuler() {
    this.viewCtrl.dismiss();
  }

  showAddIntervalModale() {
    let modal = Modal.create(AddIntervalModale);
    modal.onDismiss(data => {
      if(typeof data !== "undefined"){
          this.interval1 = data.interval;
      }
    });
    this.interval2 = [];
    this.nav.present(modal);
  }

  showAddInterval2Modale() {
    let modal = Modal.create(AddIntervalModale, {baseInterval: this.interval1});
    modal.onDismiss(data => {
      if(typeof data !== "undefined"){
          this.interval2 = data.interval;
      }
    });
    this.nav.present(modal);
  }

}
