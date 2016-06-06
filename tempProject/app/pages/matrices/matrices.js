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
  }
  addMatrice(matrice){
    this.matrices.push(matrice);
  }


}
