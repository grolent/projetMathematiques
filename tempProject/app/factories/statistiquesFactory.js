import * as _ from 'lodash';
export class StatistiquesFactory {
  constructor() {
	}
  orderList(list){
    var orderedList = _.sortBy(list);
    return orderedList;
  }
}
