import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpController} from "./http-controller";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class LoginService {
  private static ACCESS_TOKEN_KEY = "accessToken";

  private loggedIn: boolean = false;
  private http: HttpController = null;
  private lastError: string;
  private progress: boolean = false;
  private targetPage: string;

  constructor(http: Http, private router: Router, private localStorage: LocalStorageService) {
    this.http = <HttpController> http;
    let accessToken = <string>this.localStorage.get(LoginService.ACCESS_TOKEN_KEY);
    if (accessToken) {
      this.http.setAccessToken(accessToken);
      this.loggedIn = true;
    }
    this.http.addAccessTokenChangeListener((event) => {
      if (!!event.newValue) {
        this.localStorage.set("accessToken", event.newValue); 
      } else if (event.oldValue === localStorage.get(LoginService.ACCESS_TOKEN_KEY)) {
        this.localStorage.remove(LoginService.ACCESS_TOKEN_KEY);
      }
      this.setLoggedIn(!!event.newValue, event.errorText);
    });
    router.events.subscribe((event: any) => {
      if (typeof event.urlAfterRedirects !== "undefined" && event.urlAfterRedirects !== this.targetPage) {
        this.lastError = "";
        this.targetPage = null;
      }
    });
  };

  private getErrorMessage(error: any): string {
    let errorText;
    if(typeof error._body === 'string') {
      errorText = error._body;
      try {
        let json = JSON.parse(error._body);
        errorText = json && json.error && json.error.message ? json.error.message : errorText;
      } catch (err){
        // do nothing;
      }
    }
    return errorText || error.statusText || "Server is not responding";
  }

  public login(username: string, password: string): void {
    this.progress = true;
    this.http.authenticate(username, password).subscribe(null, (error) => {
      this.lastError = error.status === 401 || error.status === 400 ? 'Invalid username or password' :
        this.getErrorMessage(error);
      this.loggedIn = false;
      this.progress = false;
    });
  }

  public logout(): void {
    this.progress = true;
    this.http.post('/logout', null).subscribe(() => {
      this.progress = false;
      this.localStorage.remove(LoginService.ACCESS_TOKEN_KEY);
      this.setLoggedIn(false);
    }, () => this.progress = false);
  }

  public inProgress(): boolean {
    return this.progress;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public getLastError(): string {
    return this.lastError;
  }

  private setLoggedIn(loggedIn: boolean, errorDescription = '') {
    this.lastError = errorDescription;
    this.progress = false;
    this.loggedIn = loggedIn;
    this.targetPage = this.isLoggedIn() ? "/" : "/login";
    this.router.navigate([this.targetPage]);
  }
}
