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
    this.listeTest = [1,3,4,8,3,4,3,4];
    this.listeTest2 = [2,7,3,4,6,9,8];
    this.listeTest3 = [3];
    this.listeTest4 = [3,3];
    this.listeTest5 = [1,3,3.2,4,3.2,4,3.2,5 ,4, 3,2,1,5,5];
    this.listeTest6 = [1,1,3,5,6,6];
    this.statistiquesFactory = new StatistiquesFactory();
  }
}
