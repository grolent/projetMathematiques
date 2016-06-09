import {Modal, NavController, Page, ViewController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
@Page({
  templateUrl: 'build/pages/modales/editMatriceModale.html'
})
export class EditMatriceModale {
  static get parameters() {
    return [
      [ViewController],
      [FormBuilder],
      [NavParams]
    ];
  }
  constructor(viewCtrl, form, params) {
    this.viewCtrl = viewCtrl;
    this.matrice = params.get('matrice');

    //creation matrice indexee
    this.indexerMatrice = function(matriceNonIndexee){
      var matriceResult = [];
      for(var i=0; i<matriceNonIndexee.length; i++){
        matriceResult[i] = [];
        for(var j=0; j<matriceNonIndexee[i].length; j++){
          matriceResult[i][j] = {
            val: ""+matriceNonIndexee[i][j]
          }
        }
      }
      return matriceResult;
    }
    this.antiIndexerMatrice = function(matriceIndexee){
      var matriceResult = [];
      for(var i=0; i<matriceIndexee.length; i++){
        matriceResult[i] = [];
        for(var j=0; j<matriceIndexee[i].length; j++){
          matriceResult[i][j] = parseFloat(matriceIndexee[i][j].val);
        }
      }
      return matriceResult;
    }
    this.matriceIndexee = this.indexerMatrice(this.matrice.matrice);
    //fin creation matrice indexee

    this.testValue = 0;
  }
  annuler() {
    this.viewCtrl.dismiss();
  }
  testEdit(){
    this.matrice.matrice = this.antiIndexerMatrice(this.matriceIndexee);
    let data = {
      matrice: this.matrice
    };
    this.viewCtrl.dismiss(data);
  }


}
