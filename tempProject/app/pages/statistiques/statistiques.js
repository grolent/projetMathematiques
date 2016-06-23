import {Page, Modal, NavController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {StatistiquesFactory} from '../../factories/statistiquesFactory';
import {AddSerieModale} from '../modales/addSerieModale';

@Page({
  templateUrl: 'build/pages/statistiques/statistiques.html'
})
export class Statistiques {
  static get parameters() {
    return [
      [FormBuilder],
      [NavController]
    ];
  }
  constructor(form, nav) {
    this.series = [];
    this.nav = nav;
    this.statistiquesFactory = new StatistiquesFactory();
  }

  showAddSerieModale() {
    let modal = Modal.create(AddSerieModale);
    modal.onDismiss(data => {
      if(typeof data !== "undefined"){
          while(_.findIndex(this.series, {'nom': data.nom}) !== -1){
            data.nom = data.nom + " bis";
          }
          this.series.push({nom: data.nom, serie: data.serie});
      }
    });
    this.nav.present(modal);
  }
}
