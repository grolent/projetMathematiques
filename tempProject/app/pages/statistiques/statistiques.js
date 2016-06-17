import {Page, Modal, NavController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {StatistiquesFactory} from '../../factories/statistiquesFactory';
import {AddSerieModale} from '../modales/addSerieModale';

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
    this.series = [];
    this.nav = nav;
    this.listeTest = [1,3,4,8,3,4,3,4];
    this.listeTest2 = [2,7,3,4,6,9,8];
    this.listeTest3 = [3];
    this.listeTest4 = [3,3];
    this.listeTest5 = [1,3,3.2,4,3.2,4,3.2,5 ,4, 3,2,1,5,5];
    this.listeTest6 = [1,1,3,5,6,6];

    this.listeEffTest1 = [{val: 1, eff: 1},
                          {val: 4, eff: 3},
                          {val: 8, eff: 1},
                          {val: 3, eff: 3}];

    this.statistiquesFactory = new StatistiquesFactory();
    var testModeEff1 = this.statistiquesFactory.getModeEff(this.listeEffTest1);
    console.log('testModeEff1', testModeEff1);
    var testMoyEff1 = this.statistiquesFactory.getMoyenneEff(this.listeEffTest1);
    console.log('testMoyEff1', testMoyEff1);
    var testMedianeEff1 = this.statistiquesFactory.getMedianeEff(this.listeEffTest1);
    console.log('testMedianeEff1', testMedianeEff1);
    var testEcartTypeEff1 = this.statistiquesFactory.getEcartType(this.listeEffTest1);
    console.log('testEcartTypeEff1', testEcartTypeEff1);
    console.log('listeEffTest1', this.listeEffTest1);
  }

  showAddSerieModale() {
    let modal = Modal.create(AddSerieModale);
    modal.onDismiss(data => {
      if(typeof data !== "undefined"){
          this.series.push({nom: data.nom, serie: data.serie});
      }
      console.log(this.series);
    });
    this.nav.present(modal);
  }
}
