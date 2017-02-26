import ResultModel from "./ResultModel";

export default class MutationModel {
  private startTime: Date;
  public startRenderTime: Date;
  private loopCount: number;

  constructor() {
    this.loopCount = 0;
    this.startTime = new Date();
  }

  public startListening(id: string, closeWindow: boolean = true, waitTime: number = 15000): void {
    let MutationObserver: any = (<any>window).MutationObserver;
    let self = this;
    let observer = new MutationObserver((mutations: any) => {
      mutations.forEach((mutation: any) => {
        self.registerTime(id,closeWindow, waitTime);
      });
    });

    observer.observe(document, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  public registerTime(id: string, closeWindow: boolean = true, waitTime: number = 15000) {
    this.loopCount += 1;
    let endDate = new Date();
    let renderTime = endDate.getTime() - this.startRenderTime.getTime();
    let totalTime = endDate.getTime() - this.startTime.getTime();
    ResultModel.setItem(id, { "totalTime": totalTime, "loopCount": this.loopCount, "renderTime": renderTime });
    if (closeWindow === true) {
      setTimeout(() => {
        let lastRenderTime = ResultModel.getValue(id, "renderTime");
        if (lastRenderTime == renderTime) {
          window.close();
        }
      }, waitTime);
    }
  }
}
