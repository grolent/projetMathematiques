import {Page, Modal, NavController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {AddMatriceModale} from '../modales/addMatriceModale';
import {EditMatriceModale} from '../modales/editMatriceModale';

@Page({
  templateUrl: 'build/pages/matrices/matrices.html'
})
export class Matrices {
  static get parameters() {
    return [
      [FormBuilder],
      [NavController]
    ];
  }
  constructor(form, nav) {
    this.nav = nav;
    this.matrices = [
      {
        nom: 'matrice 1',
        matrice: [[1,2,3,4],
                  [4,3,2,1],
                  [5,6,7,8]]
      },
      {
        nom: 'matrice 2',
        matrice: [[4,3,2,1],
                  [1,2,3,4],
                  [8,7,6,5]]
      }
    ];
    this.matriceTestResult = {nom: '',
                              matrice: []};
  }

  addMatrice(matrice){
    this.matrices.push(matrice);
  }

  addEmptyMatrice(nom, m, n){
    var matriceData = [];
    for(var i = 0; i < m; i++)
    {
      var ligneMatrice = [];
      for(var j = 0; j < n; j++)
      {
        ligneMatrice.push(0);
      }
      matriceData.push(ligneMatrice);
    }
    var matriceObject = {
      nom: nom,
      matrice: matriceData
    };
    this.matrices.push(matriceObject);
  }

  additionMatrices(matriceA, matriceB){
    if( (matriceA.length !== matriceB.length) || (matriceA[0].length !== matriceB[0].length) ){
      return null;
    }
    else{
      var matriceResult = [];
      for(var i = 0; i<matriceA.length; i++){
        matriceResult[i] = [];
        for(var j = 0; j<matriceA[i].length; j++){
          matriceResult[i][j] = matriceA[i][j] + matriceB[i][j];
        }
      }
      return matriceResult;
    }
  }

  soustractionMatrices(matriceA, matriceB){
    if( (matriceA.length !== matriceB.length) || (matriceA[0].length !== matriceB[0].length) ){
      return null;
    }
    else{
      var matriceResult = [];
      for(var i = 0; i<matriceA.length; i++){
        matriceResult[i] = [];
        for(var j = 0; j<matriceA[i].length; j++){
          matriceResult[i][j] = matriceA[i][j] - matriceB[i][j];
        }
      }
      return matriceResult;
    }
  }

  showAddMatriceModale() {
    let modal = Modal.create(AddMatriceModale);
    modal.onDismiss(data => {
      if(typeof data !== "undefined"){
          this.addEmptyMatrice(data.nom, data.m, data.n);
      }
    });
    this.nav.present(modal);
  }

  showEditMatriceModale(matrice) {
    let modal = Modal.create(EditMatriceModale, {matrice: matrice});
    modal.onDismiss(data => {
      if(typeof data !== "undefined"){
        console.log('test dismiss edit');
      }
    });
    this.nav.present(modal);
  }

}
