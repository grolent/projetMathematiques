export class MatricesFactory {

  constructor() {
	}
  additionMatrices(matriceA, matriceB){
    if( !this.areCompatible(matriceA, matriceB) ){
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
    if( !this.areCompatible(matriceA, matriceB) ){
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
  areCompatible(matriceA, matriceB){
    if( (matriceA.length === matriceB.length) && (matriceA[0].length === matriceB[0].length) ){
      return true;
    }
    else{
      return false;
    }
  }
  getDeterminant(matrice){
    if( this.isSquare(matrice) ){
      if(matrice.length === 1){
        var result = matrice[0][0];
        return result;
      }
      else if(matrice.length === 2){
        var result = (matrice[0][0]*matrice[1][1]) - (matrice[0][1]*matrice[1][0]);
        return result;
      }
      else{
        var result = 0;
        for(var m = 0; m<matrice.length; m++){
          var subMatrice = this.getSubMatrice(matrice, 0, m);
          if( m%2 === 0 ){
            var toAdd = matrice[0][m]*this.getDeterminant(subMatrice);
            result += toAdd;
          }
          else{
            var toAdd = -1*matrice[0][m]*this.getDeterminant(subMatrice);
            result += toAdd;
          }
        }
        return result;
      }
    }
    else{
      return null;
    }
  }

  getSubMatrice(matrice, ignoreM, ignoreN){
    var matriceResult = [];
    for(var i = 0 ; i<(matrice.length - 1); i++){
      matriceResult[i] = [];
    }

    var reelM = 0;
    for(var m = 0; m < matrice.length; m++){

      var reelN = 0;
      for(var n = 0; n < matrice[0].length; n++){

        if( (m !== ignoreM) && (n !== ignoreN) ){
          matriceResult[reelM][reelN] = matrice[m][n];
          reelN++;
        }

      }
      if(m !== ignoreM){
        reelM++;
      }

    }
    return matriceResult;
  }

  getCoMatrice(matrice){
    var matriceResult = [];
    for(var i = 0; i<matrice.length; i++){
      matriceResult[i] = [];
    }

    for(var i = 0; i < matrice[0].length; i++){
      for(var j = 0; j < matrice[0].length; j++){
        var subMatrice = this.getSubMatrice(matrice, i, j);
        if((i+j)%2 === 0){
          matriceResult[i][j] = this.getDeterminant(subMatrice);
        }
        else{
          matriceResult[i][j] = - this.getDeterminant(subMatrice);
        }
      }
    }

    return matriceResult;
  }

  getMatriceTransposee(matrice){
    var matriceResult = [];
    for(var i = 0; i<matrice[0].length; i++){
      matriceResult[i] = [];
    }
    for(var m = 0; m<matrice.length; m++){
      for(var n = 0; n<matrice[0].length; n++){
        matriceResult[n][m] = matrice[m][n];
      }
    }
    return matriceResult;
  }

  multMatriceNumber(matrice, number){
    var matriceResult = [];
    for(var i = 0; i<matrice.length; i++){
      matriceResult[i] = [];
    }

    for(var i = 0; i<matrice.length; i++){
      for(var j = 0; j<matrice[0].length; j++){
        matriceResult[i][j] = matrice[i][j] * number;
      }
    }

    return matriceResult;
  }

  getMatriceInverse(matrice){
    var determinant = this.getDeterminant(matrice);
    if(Math.abs(determinant) < Number.EPSILON){
      return null;
    }
    else{
      var coMatrice = this.getCoMatrice(matrice);
      var transposeeCoMatrice = this.getMatriceTransposee(coMatrice);
      var matriceResult = this.multMatriceNumber(transposeeCoMatrice, (1/determinant));
      return matriceResult;
    }
  }

  isInversible(matrice){
    var determinant = this.getDeterminant(matrice);
    if( (determinant === null) || (Math.abs(determinant) < Number.EPSILON) ){
      return false;
    }
    else{
      return true;
    }
  }
}
