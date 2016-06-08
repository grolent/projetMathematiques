export class MatricesFactory {

  constructor() {
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

  isSquare(matrice){
    if(matrice.length == matrice[0].length){
      return true;
    }
    else{
      return false;
    }
  }
}
