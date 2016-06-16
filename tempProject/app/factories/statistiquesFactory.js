import * as _ from 'lodash';
export class StatistiquesFactory {
  constructor() {
	}
  orderList(list){
    var orderedList = _.sortBy(list);
    return orderedList;
  }
  getMoyenne(list){
    var moyenne = _.mean(list);
    return moyenne;
  }
  getMediane(list){
    var orderedList = this.orderList(list);
    //cas length paire
    if(orderedList.length%2 === 0){
      var i = (orderedList.length/2)-1;
      var mediane = (orderedList[i]+orderedList[i+1])/2;
      return mediane;
    }
    //cas length impaire
    else{
      var i = _.floor(orderedList.length/2);
      var mediane = orderedList[i];
      return mediane;
    }
  }
  getMode(list){
    var orderedList = this.orderList(list);
    var modes = [];
    var maxCount = 0;
    var count = 0;
    for(var i = 0; i<orderedList.length; i++){
      // cas premier élément
      if(i === 0){
        if(orderedList.length === 1){
          modes.push(orderedList[i]);
        }
        else{
          count++;
        }
      }
      else{
        if(orderedList[i] === orderedList[i-1]){
          count++;
        }
        else{
          if(count > maxCount){
            maxCount = count;
            modes = [];
            modes.push(orderedList[i-1]);
            count = 1;
          }
          else if(count === maxCount){
            modes.push(orderedList[i-1]);
            count = 1;
          }
        }
        // cas dernier element
        if(i === orderedList.length-1)
        {
          if(count > maxCount){
            modes = [];
            modes.push(orderedList[i]);
          }
          else if(count === maxCount){
            modes.push(orderedList[i]);
          }
        }
      }
    }
    return modes;
  }

  getModeEff(listeEff){
    var result = [];
    var listeEffOrdDesc = _.orderBy(listeEff, ['eff'], ['desc']);
    var i = 0;
    do{
      result.push(listeEffOrdDesc[i].val);
      i++;
    }while( (i < listeEffOrdDesc.length) && (listeEffOrdDesc[i-1].eff === listeEffOrdDesc[i].eff) );
    return result;
  }

  getMoyenneEff(listeEff){
    var total = 0;
    var effectifs = 0;
    for(var i = 0; i < listeEff.length; i++){
      total += listeEff[i].val * listeEff[i].eff;
      effectifs += listeEff[i].eff;
    }
    if(effectifs > 0){
      return total/effectifs;
    }
    else{
      return 0;
    }
  }

  listeEffToListe(listeEff){
    var result = [];
    for(var i = 0; i<listeEff.length; i++){
      var currentVal = listeEff[i].val;
      var currentEff = listeEff[i].eff;
      for(var j = 0; j<currentEff; j++){
        result.push(currentVal);
      }
    }
    return result;
  }

  getMedianeEff(listeEff){
    var listeEffOrdValAsc = _.orderBy(listeEff, ['val'], ['asc']);
    var listeToWork = this.listeEffToListe(listeEffOrdValAsc);
    return this.getMediane(listeToWork);
  }

  getVariance(listeEff){
    var moyenne = this.getMoyenneEff(listeEff);
    var effectifs = 0;
    var sommeEcarts = 0;
    for(var i = 0; i<listeEff.length; i++){
      effectifs += listeEff[i].eff;
      sommeEcarts += Math.pow( (listeEff[i].val - moyenne), 2) * listeEff[i].eff;
    }
    if(effectifs > 0){
      return sommeEcarts/effectifs;
    }
    else{
      return 0;
    }
  }

  getEcartType(listeEff){
    var variance = this.getVariance(listeEff);
    return Math.sqrt(variance);
  }


}
