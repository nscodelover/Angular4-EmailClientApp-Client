import {Component, Input} from "@angular/core";

@Component({
  selector: 'error-label',
  template: `<div class="ma-error-label">{{error}}</div>`
})
export default class ErrorLabelComponent {
  @Input() error: string = '';
}