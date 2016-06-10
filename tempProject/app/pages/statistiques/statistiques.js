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
    this.listeTest = [1,3,4,8,3,4,3,5];
    this.listeTest2 = [2,7,3,4,6,9,8];
    this.statistiquesFactory = new StatistiquesFactory();

    this.testMoyenne = this.statistiquesFactory.getMoyenne(this.listeTest);
    console.log('test moyenne: ', this.testMoyenne);
    console.log(this.listeTest);
    console.log('test mediane: ', this.statistiquesFactory.getMediane(this.listeTest));
    this.listeTest = this.statistiquesFactory.orderList(this.listeTest);
    console.log(this.listeTest);
    console.log('test mediane: ', this.statistiquesFactory.getMediane(this.listeTest));
    console.log(this.listeTest2);
    console.log('test mediane: ', this.statistiquesFactory.getMediane(this.listeTest2));
  }
}
