import {Component, Input} from "@angular/core";
import {Http} from "@angular/http";
import {HttpController} from "../services/http-controller";


@Component({
  selector: "mailbox-message-list-item",
  template: `<div class="ma-mailbox-list-item">
                <button class="ma-mailbox-list-item" (click)="getMessageContent($event)" id="{{messageID}}">
                  <h2 class="ma-text-black ma-mailbox-message-title">{{messageID}}</h2>
                </button>
            </div>`
})
export default class MailboxMessageListItem {
  @Input() messageID:string;

  private http: HttpController = null;

  constructor(http: Http) {
    this.http = <HttpController> http;
  }

  protected getMessageContent(event): void {
    console.log(event.currentTarget.id + ' Clicked');
  }
}
