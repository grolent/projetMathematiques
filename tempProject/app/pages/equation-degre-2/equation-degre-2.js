import {Page} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';


@Page({
  templateUrl: 'build/pages/equation-degre-2/equation-degre-2.html'
})
export class EquationDegre2 {
  static get parameters() {
    return [
      [FormBuilder]
    ];
  }
  constructor(form) {
    this.equationDegre2Form = form.group({
      'a': ['', Validators.required],
      'b': ['', Validators.required],
      'c': ['', Validators.required]
    });
    this.a = this.equationDegre2Form.controls['a'];
    this.b = this.equationDegre2Form.controls['b'];
    this.c = this.equationDegre2Form.controls['c'];
    this.result = "";
  }
  calculSecondDegre(event) {
    var facA = parseFloat(this.a._value);
    var facB = parseFloat(this.b._value);
    var facC = parseFloat(this.c._value);
    var racine1;
    var racine2;
    var strResult = "";

    if(facA === 0){
      strResult = "a doit être différent de 0";
    }
    else{
      var p = Math.pow(facB, 2) - (4*facA*facC);
      if(p === 0){
        racine1 = ((-facB)/(2*facA)).toFixed(4);
        strResult = "Le polynôme a 1 racine : R1="+racine1;
      }
      else if(p > 0){
        racine1 = ((-facB + (Math.sqrt(p)))/(2*facA)).toFixed(4);
        racine2 = ((-facB - (Math.sqrt(p)))/(2*facA)).toFixed(4);
        strResult = "Le polynôme a 2 racines : R1="+racine1+" et R2="+racine2;
      }
      else if(p < 0){
        var racinePartieReelle;
        var racinePartieImaginaire;
        racinePartieReelle = (-facB/(2*facA)).toFixed(4);
        racinePartieImaginaire = ((Math.sqrt(-p))/(2*facA)).toFixed(4);
        racine1 = "("+racinePartieReelle+") +i ("+racinePartieImaginaire+")";
        racine2 = "("+racinePartieReelle+") -i ("+racinePartieImaginaire+")";
        strResult = "Le polynôme a 2 racines : R1="+racine1+" et R2="+racine2;
      }
    }
    this.result = strResult;


    event.preventDefault();
  }

}
