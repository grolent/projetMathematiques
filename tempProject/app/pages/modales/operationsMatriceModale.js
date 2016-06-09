import {Modal, NavController, Page, ViewController, NavParams} from 'ionic-angular';
import {MatricesFactory} from '../../factories/matricesFactory';
@Page({
  templateUrl: 'build/pages/modales/operationsMatriceModale.html'
})
export class OperationsMatriceModale {
  static get parameters() {
    return [
      [ViewController],
      [NavParams]
    ];
  }
  constructor(viewCtrl, params) {
    this.matrice1 = {};
    this.matrice2 = {};
    this.matriceResult = {
      nom: "Résultat"
    };
    this.viewCtrl = viewCtrl;
    this.matricesFactory = new MatricesFactory();
    this.matrices = params.get('matrices');
  }
  annuler() {
    this.viewCtrl.dismiss();
  }
}
