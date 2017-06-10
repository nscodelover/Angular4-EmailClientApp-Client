import {Component, Input} from "@angular/core";

@Component({
  selector: 'progress-dialog',
  template: `<div class="progress-dialog ma-fill-window-space" *ngIf="progress"></div>`
})
export default class ProgressDialogComponent {
  @Input() progress: boolean = false;
}