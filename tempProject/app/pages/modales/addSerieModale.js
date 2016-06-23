import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {AddEntreeSerieModale} from './addEntreeSerieModale';
import * as _ from 'lodash';
@Page({
  templateUrl: 'build/pages/modales/addSerieModale.html'
})
export class AddSerieModale {
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
    this.serie = [];
    this.addSerieForm = form.group({
      'nom': ['', Validators.required]
    });
    this.nom = this.addSerieForm.controls['nom'];
  }
  valider() {
    let data = {
      nom: this.nom._value,
      serie: this.serie
    };
    this.viewCtrl.dismiss(data);
  }
  annuler() {
    this.viewCtrl.dismiss();
  }

  ajouterEntree() {
    let modal = Modal.create(AddEntreeSerieModale);
    modal.onDismiss(data => {
      if(typeof data !== "undefined"){
        var indexValDejaLa = _.findIndex(this.serie, { 'val': Number(data.val)} );    
        if(indexValDejaLa === -1){
          this.serie.push({val: Number(data.val), eff: Number(data.eff)});
        }
        else{
          this.serie[indexValDejaLa].eff = this.serie[indexValDejaLa].eff + Number(data.eff);
        }
      }
    });
    this.nav.present(modal);
  }


}
