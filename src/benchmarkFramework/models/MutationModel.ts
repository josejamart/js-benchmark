import ResultModel from "./ResultModel";

export default class MutationModel {
  private startTime: Date;
  private startRenderTime: Date;
  private loopCount: number;
  private closeInterval: any;
  private lastCheck: Date;
  private id: string;
  private closeWindow: boolean;
  private waitTime: number;

  constructor(id: string, closeWindow: boolean = true, waitTime: number = 5000) {
    this.loopCount = 0;
    this.startTime = new Date();
    this.closeInterval = null;
    this.lastCheck = null;
    this.id = id;
    this.closeWindow = closeWindow;
    this.waitTime = waitTime;
  }

  public startListening(): void {
    let MutationObserver: any = (<any>window).MutationObserver;
    let self = this;
    let observer = new MutationObserver((mutations: any) => {
      mutations.forEach((mutation: any) => {
        self.registerTime();
      });
    });

    observer.observe(document, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  private registerTime() {
    this.loopCount += 1;
    let endDate = new Date();
    let renderTime = endDate.getTime() - this.startRenderTime.getTime();
    let totalTime = endDate.getTime() - this.startTime.getTime();
    ResultModel.setItem(this.id, { "totalTime": totalTime, "loopCount": this.loopCount, "renderTime": renderTime, "lastCheck": new Date() });
    if (this.closeWindow === true && this.closeInterval === null) {
      let self = this;
      this.closeInterval = setInterval(() => {
        let lastCheck = ResultModel.getValue(this.id, "lastCheck");
        if (self.lastCheck > new Date(lastCheck)) {
          clearInterval(self.closeInterval);
          window.close();
        }
        self.lastCheck = new Date();
      }, this.waitTime);
    }
  }

  public startRendering(){
    this.startRenderTime = new Date();
  }

  public endRendering(){
    this.registerTime();
  }
}
