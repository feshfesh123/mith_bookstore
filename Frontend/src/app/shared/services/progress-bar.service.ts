import { Injectable } from '@angular/core';
import { NgProgressRef } from '@ngx-progressbar/core';
import { AlertService } from 'ngx-alerts';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  progressRef: NgProgressRef;
  defaultColor: string = "#1B95E0";
  successColor: string = "#42A948";
  errorColor: string = "#a94442";

  currentColor: string = this.defaultColor;
  constructor(
    private alertService: AlertService) { }

  startLoading(){
    this.progressRef.start();
  }

  completeLoading(){
    this.progressRef.complete();
  }

  completeSuccessLoading(message: string = null){
    this.currentColor = this.successColor;
    this.progressRef.complete();
    if (message) this.alertService.success(message);
  }

  completeErrorLoading(message: string = null){
    this.currentColor = this.errorColor;
    this.progressRef.complete();
    if (message) this.alertService.danger(message);
  }
}
