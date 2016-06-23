export class ProbasFactory {

  constructor() {

	}
  loiUniforme1(interval){
    return 1/(interval[1]-interval[0]);
  }
  loiUniforme2(interval1, interval2){
    return (interval2[1]-interval2[0])/(interval1[1]-interval1[0]);
  }

  loiBinomiale(p, n, k){
    var coefficientBinomial = this.getFactorial(n)/( (this.getFactorial(k)) * (this.getFactorial(n-k)) );
    var res = coefficientBinomial * Math.pow(p,k) * Math.pow(1-p, n-k);
    return res;
  }

  loiNormale(esperance, ecartType, k){
    var inter1 = 1/(ecartType*Math.sqrt(2 * Math.PI));
    var inter2 = Math.pow(k-esperance, 2);
    var inter3 = Math.pow(ecartType, 2);
    var inter4 = (-1/2) * (inter2 / inter3);
    var res = inter1 * Math.exp(inter4);
    return res;
  }

  // algo par approximation, plus le pas est petit, plus c'est précis.
  // Fonctionne avec des intervals finis, pour des fonctions continues et avec tout y=fx strictivement positif
  probaLoiNormale(interval, pas, esperance, ecartType){
    var currentX = interval[0];
    var precedentY;
    var currentY = this.loiNormale(esperance, ecartType, currentX);
    var petitY;
    for(var sommeAires = 0; currentX < interval[1]; currentX = currentX + pas){
      precedentY = currentY;
      currentY = this.loiNormale(esperance, ecartType, currentX+pas);
      if(precedentY < currentY){
        petitY = precedentY;
      }
      else{
        petitY = currentY;
      }
      sommeAires += ( (pas * (2*petitY + Math.abs(precedentY - currentY) ))/2 );
    }
    return sommeAires;
  }

  loiPoisson(interval, lambda){
    var res;
    var result = [];
    for(var i = interval[0]; i <= interval[1]; i++){
      res = ( Math.exp(-lambda) * Math.pow(lambda, i) )/this.getFactorial(i);
      result.push({index: i, val: res});
    }
    return result;
  }

  intervalToString(interval){
    return '[ '+interval[0].toFixed(2)+' ; '+interval[1].toFixed(2)+' ]';
  }

  getFactorial(n){
    if(n === 0){
      return 1;
    }
    else{
      var result = 1;
      for(var i=1; i<=n; i++){
        result = result*i;
      }
      return result;
    }
  }

  getEsperance(probas){
    var result = 0;
    for(var i = 0; i<probas.length; i++){
      result += probas[i].val * probas[i].proba;
    }
    return result;
  }

  getVariance(probas){
    var esperance = this.getEsperance(probas);
    var sommeProbas = 0;
    var sommeEcarts = 0;
    for(var i = 0; i<probas.length; i++){
      sommeProbas += probas[i].proba;
      sommeEcarts += Math.pow( (probas[i].val - esperance), 2) * probas[i].proba;
    }
    if(sommeProbas > 0){
      return sommeEcarts/sommeProbas;
    }
    else{
      return 0;
    }
  }

  getEcartType(probas){
    var variance = this.getVariance(probas);
    return Math.sqrt(variance);
  }
}
