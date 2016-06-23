import {Page, Modal, NavController} from 'ionic-angular';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {AddMatriceModale} from '../modales/addMatriceModale';
import {EditMatriceModale} from '../modales/editMatriceModale';
import {InverseMatriceModale} from '../modales/inverseMatriceModale';
import {OperationsMatriceModale} from '../modales/operationsMatriceModale';
import {MatricesFactory} from '../../factories/matricesFactory';

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
    this.matricesFactory = new MatricesFactory();
    this.matrices = [
      {
        nom: 'matrice 1',
        matrice: [[1,2,3],
                  [0,1,4],
                  [5,6,0]]
      },
      {
        nom: 'matrice 2',
        matrice: [[4,3,2,1],
                  [1,2,3,4],
                  [8,7,6,5]]
      }
    ];
  }

  replaceMatrice(nouvelleMatrice){
    this.matrices.find(function (matrice) {
      return matrice.nom === nouvelleMatrice.nom;
    }).matrice = nouvelleMatrice.matrice;
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
    while(_.findIndex(this.matrices, {'nom': matriceObject.nom}) !== -1){
      matriceObject.nom = matriceObject.nom + " bis";
    }
    this.matrices.push(matriceObject);

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
        this.replaceMatrice(data.matrice);
      }
    });
    this.nav.present(modal);
  }

  showInverseMatriceModale(matrice) {
    let modal = Modal.create(InverseMatriceModale, {matrice: matrice});
    this.nav.present(modal);
  }

  showOperationsMatriceModale(matrices) {
    let modal = Modal.create(OperationsMatriceModale, {matrices: matrices});
    this.nav.present(modal);
  }

  deleteMatrice(matriceToDelete) {
    var indexToDelete = this.matrices.indexOf(this.matrices.find(function (matrice) {
      return matrice.nom === matriceToDelete.nom;
    }));
    this.matrices.splice(indexToDelete, 1);

  }


}
