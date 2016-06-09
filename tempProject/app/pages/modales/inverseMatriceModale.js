import {Modal, NavController, Page, ViewController, NavParams} from 'ionic-angular';
import {MatricesFactory} from '../../factories/matricesFactory';
@Page({
  templateUrl: 'build/pages/modales/inverseMatriceModale.html'
})
export class InverseMatriceModale {
  static get parameters() {
    return [
      [ViewController],
      [NavParams]
    ];
  }
  constructor(viewCtrl, params) {
    this.viewCtrl = viewCtrl;
    this.matricesFactory = new MatricesFactory();
    this.matrice = params.get('matrice');
    this.matriceInverse = {
      nom: 'Matrice inverse',
      matrice: this.matricesFactory.getMatriceInverse(this.matrice.matrice)
    };
  }
  annuler() {
    this.viewCtrl.dismiss();
  }
}
