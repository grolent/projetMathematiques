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
    console.log("matrice non indexee: ",this.matrice.matrice);
    this.indexerMatrice = function(matriceNonIndexee){
      var matriceResult = [];
      for(var i=0; i<matriceNonIndexee.length; i++){
        matriceResult[i] = [];
        for(var j=0; j<matriceNonIndexee[i].length; j++){
          matriceResult[i][j] = {
            val: matriceNonIndexee[i][j]
          }
        }
      }
      return matriceResult;
    }
    this.antiIndexerMatrice = function(matriceIndexee){

    }
    this.matriceIndexee = this.indexerMatrice(this.matrice.matrice);
    //fin creation matrice indexee

    console.log("matrice indexee: ",this.matriceIndexee);
    this.testValue = 0;
  }
  annuler() {
    this.viewCtrl.dismiss();
  }
  testEdit(){
    console.log(this.matriceIndexee);
  }
  inputChange(event){
    return event.srcElement.valueAsNumber;
  }


}
