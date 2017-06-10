import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
import {HttpController} from "../services/http-controller";
import {Router} from "@angular/router";

@Component({
  selector: "mailbox-folder",
  template: `<div class="ma-mailbox-folder">
                <button class="ma-mailbox-folder" (click)="changeFolder($event)" id="{{folderName}}">
                  <h2 class="ma-text-black ma-mailbox-folder-name">{{folderName}}</h2>
                </button>
            </div>`
})
export default class MailboxFolder {
  @Input() folderName:string;
  @Output() updateMails: EventEmitter<any> = new EventEmitter();;


  private http: HttpController = null;

  constructor(http: Http, private router: Router) {
    this.http = <HttpController> http;
  }

  changeFolder(event): void {
      this.updateMails.emit(event);
  }
}
