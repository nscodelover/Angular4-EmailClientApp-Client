import {Component, OnInit, NgZone} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {HttpController} from "../services/http-controller";

@Component({
  selector: "app-mailbox",
  templateUrl:  "./mailbox.component.html"
})

export default class Mailbox implements OnInit {
  folderNames = new Array<String>();
  messages = new Array<String>();
  
  curFolder: string;
  curPageNum: number;

  private http: HttpController = null;

  constructor(http: Http, private router: Router, private zone:NgZone) {
    this.http = <HttpController> http;
    this.curFolder = 'inbox';
    this.curPageNum = 1;

    this.http.getGmailFolders('', '', this.router).subscribe((res) => {
      this.zone.run(() => {
        let folders: Array<String> = ['Inbox', 'Sent'];
        for(let i = 0; i < res['content'].length; i++) {
          if(res['content'][i].type === "user") {
            folders.push(res['content'][i].name);
          }
        }
        this.folderNames = folders;
      });   
    }, (error) => {
        console.log(error);
    });

    this.http.getGmailMessages('', '', this.curFolder, this.curPageNum, this.router).subscribe((res) => {
      this.zone.run(() => {
        this.messages = res['content'];
      });   
    }, (error) => {
        console.log(error);
    });
  }

  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
    // this.folderNames = this.http.getSharedGmailFolder();
    // this.messages = this.http.getSharedGmailMessage();    
  }
  protected updateMails(event): void {
    console.log(event.currentTarget.id + ' Clicked', this.messages);
    this.curFolder = event.currentTarget.id;
    this.http.getGmailMessages('', '', this.curFolder, this.curPageNum, this.router).subscribe((res) => {
      this.zone.run(() => {
        this.messages = res['content'];
      });   
    }, (error) => {
        console.log(error);
    });
  }

  clickPrevPage(event): void {
    console.log('clickPrevBtn');
    this.curPageNum --;
    if(this.curPageNum <= 0) {
      this.curPageNum = 1;
    }

    this.http.getGmailMessages('', '', this.curFolder, this.curPageNum, this.router).subscribe((res) => {
      this.zone.run(() => {
        this.messages = res['content'];
      });   
    }, (error) => {
        console.log(error);
    });
  }

  clickNextPage(event): void {
    console.log('clickNextBtn');
    this.curPageNum ++;
    if(this.messages.length < 10) {
      this.curPageNum --;
    }

    this.http.getGmailMessages('', '', this.curFolder, this.curPageNum, this.router).subscribe((res) => {
      this.zone.run(() => {
        this.messages = res['content'];
      });   
    }, (error) => {
        console.log(error);
    });
  }
}
