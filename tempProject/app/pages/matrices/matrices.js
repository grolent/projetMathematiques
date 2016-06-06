import {Page} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';


@Page({
  templateUrl: 'build/pages/matrices/matrices.html'
})
export class Matrices {
  static get parameters() {
    return [
      [FormBuilder]
    ];
  }
  constructor(form) {
    this.matrices = [];

    this.matriceTestA = [
      [1,2,3,4],
      [4,3,2,1],
      [5,6,7,8]
    ];

    this.matriceTestB = [
      [4,3,2,1],
      [1,2,3,4],
      [8,7,6,5]
    ];
    this.matriceTestResult = [];
  }
  addMatrice(matrice){
    this.matrices.push(matrice);
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

}
