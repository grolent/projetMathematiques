import {Page} from 'ionic-angular';2
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
  }
  calculSecondDegre(event) {
    var facA = parseFloat(this.a._value);
    var facB = parseFloat(this.b._value);
    var facC = parseFloat(this.c._value);


    event.preventDefault();
  }
  testController(event) {
    console.log('test controller: ', this);
  }

}
