export interface ResultItem{
  totalTime: number;
  loopCount: number;
  renderTime: number;
}

export default class ResultModel {
    public static getItem(id: string) : ResultItem {
      return JSON.parse(localStorage.getItem(id));
    }
    public static getValue(id: string, key: string) : any{
      var item = JSON.parse(localStorage.getItem(id));
      return item[key];
    }
    public static setItem(id : string, item: ResultItem) : void{
      localStorage.setItem(id, JSON.stringify(item));
    }

    public static setValue(id: string, key: string, value: any) : void{
      var item = JSON.parse(localStorage.getItem(id));
      item[key]=value;
      this.setItem(id,item);
    }
}
