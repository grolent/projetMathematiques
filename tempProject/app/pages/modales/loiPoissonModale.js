import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {AddIntervalPoissonModale} from './addIntervalPoissonModale';
import {ProbasFactory} from '../../factories/probasFactory';
@Page({
  templateUrl: 'build/pages/modales/loiPoissonModale.html'
})
export class LoiPoissonModale {
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
    this.poissonForm = form.group({
      'lambda': ['', Validators.compose([Validators.pattern('^[0-9]+(\.[0-9]+)?$'), Validators.required])]
    });
    this.lambda = this.addEntreeSerieForm.controls['lambda'];
    this.probasFactory = new ProbasFactory();
    this.interval = [];
    this.result = [];
    this.validated = false;
  }
  annuler() {
    this.viewCtrl.dismiss();
  }

  showAddIntervalModale() {
    let modal = Modal.create(AddIntervalPoissonModale);
    modal.onDismiss(data => {
      if(typeof data !== "undefined"){
          this.interval = data.interval;
      }
    });
    this.nav.present(modal);
  }

  valider() {
    this.result = this.probasFactory.loiPoisson(this.interval, Number(this.lambda._value) );
    this.validated = true;
  };
  isFormValid() {
    return (this.interval.length > 0);
  }

}
