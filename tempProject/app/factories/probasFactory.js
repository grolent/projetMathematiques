export class ProbasFactory {

  constructor() {

	}
  loiUniforme1(interval){
    return 1/(interval[1]-interval[0]+1);
  }
  loiUniforme2(interval1, interval2){
    return (interval2[1]-interval2[0]+1)/(interval1[1]-interval1[0]+1);
  }
}
