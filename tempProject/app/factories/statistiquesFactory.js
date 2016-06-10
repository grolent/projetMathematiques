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
}
