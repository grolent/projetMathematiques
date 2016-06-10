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
    //cas length paire
    if(list.length%2 === 0){
      var i = (list.length/2)-1;
      var mediane = (list[i]+list[i+1])/2;
      return mediane;
    }
    //cas length impaire
    else{
      var i = _.floor(list.length/2);
      var mediane = list[i];
      return mediane;
    }
  }
}
