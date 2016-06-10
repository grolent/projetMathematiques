import {Page, Modal, NavController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {StatistiquesFactory} from '../../factories/statistiquesFactory';

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
    this.nav = nav;
    this.listeTest = [3, 4, 2, 4, 12.3, 8, 4, 12.3, 2, 9, 1];
    this.statistiquesFactory = new StatistiquesFactory();
    console.log(this.listeTest);
    this.listeTest = this.statistiquesFactory.orderList(this.listeTest);
    console.log(this.listeTest);
  }
}
