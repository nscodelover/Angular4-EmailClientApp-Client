import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpController} from "./http-controller";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import {Component, AfterViewInit, ElementRef} from "@angular/core";

declare const gapi: any;

@Component({
  selector: 'google-signin',
  template: '<button id="googleBtn">Google Sign-In</button>'
})

@Injectable()
export class GmailService implements AfterViewInit {

  private clientId: string = '765916680484-i944m8sqi5hqluirmciutggkect65miu.apps.googleusercontent.com';

  private scope = [
    'profile',
    'email'
    // 'https://www.googleapis.com/auth/plus.me',
    // 'https://www.googleapis.com/auth/contacts.readonly',
    // 'https://www.googleapis.com/auth/admin.directory.user.readonly',
    // 'https://www.googleapis.com/auth/gmail.modify'
  ].join(' ');

  public auth2: any;

  private http: HttpController = null;
  constructor(http: Http, private router: Router, private element: ElementRef) {
    this.http = <HttpController> http;
  };

  ngAfterViewInit() {
    this.googleInit();
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin(this.element.nativeElement.firstChild);
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        let idToken = googleUser.getAuthResponse().id_token;
        let accessToken = googleUser.getAuthResponse().access_token;
        let userId = profile.getId();

        console.log('Auth Response || ' + JSON.stringify(googleUser.getAuthResponse()));
        console.log('ID: ' + userId);
              
        // this.http.getGmailFolders(idToken, accessToken, this.router).subscribe(null, (error) => {
        //     console.log(error);
        // });

        this.router.navigate(["/mailbox"]);
        
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }
}
