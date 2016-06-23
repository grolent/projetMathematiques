export class MatricesFactory {
  // Une matrice est représentée sous la forme d'un tableau de tableaux (un tableau par ligne)
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
  // vérifie si une matrice est carrée
  isSquare(matrice){
    if(matrice.length == matrice[0].length){
      return true;
    }
    else{
      return false;
    }
  }
  // vérifie si les matrices sont de même taille
  areCompatible(matriceA, matriceB){
    if( (matriceA.length === matriceB.length) && (matriceA[0].length === matriceB[0].length) ){
      return true;
    }
    else{
      return false;
    }
  }
  // Renvoie le déterminant d'une matrice
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

  // créé une sous matrice à partir d'une première, en ignorant une ligne et une colonne de la première
  getSubMatrice(matrice, ignoreM, ignoreN){
    var matriceResult = [];
    // on créé 1 matrice avec 1 ligne de moins
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

  // retourne la co matrice d'une matrice
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

  //Retourne la matrice transposée d'une matrice (lignes et colonnes inversées)
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

  // renvoie la matrice inverse d'une matrice carrée
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

  // Détermine si une matrice est inversible (déterminant différent de 0 et valant au moins le plus petit nombre représentable)
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
