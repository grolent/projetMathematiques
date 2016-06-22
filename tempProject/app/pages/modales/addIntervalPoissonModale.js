import {Modal, NavController, Page, ViewController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
@Page({
  templateUrl: 'build/pages/modales/addIntervalPoissonModale.html'
})
export class AddIntervalPoissonModale {
  static get parameters() {
    return [
      [ViewController],
      [FormBuilder],
      [NavParams]
    ];
  }
  constructor(viewCtrl, form, params) {
    this.viewCtrl = viewCtrl;
    this.baseInterval = params.get('baseInterval');
    this.addIntervalForm = form.group({
      'min': ['', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.required])],
      'max': ['', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.required])]
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
    if(this.baseInterval === undefined){
      if(Number(this.min._value) < Number(this.max._value) ){
        return true;
      }
      else {
        return false;
      }
    }
    else{
      if(Number(this.min._value) < Number(this.max._value) && Number(this.min._value) >= this.baseInterval[0] && Number(this.max._value) <= this.baseInterval[1]){
        return true;
      }
      else{
        return false;
      }
    }
  }

}
