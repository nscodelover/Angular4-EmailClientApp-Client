import {Component} from "@angular/core";
import {LoginService} from "./services/login.service";

@Component({
  selector: "app",
  template: `<progress-dialog [progress]="inProgress()"></progress-dialog>
             <router-outlet></router-outlet>`
})
export class AppComponent {

  constructor(protected loginService: LoginService) {
  };

  protected inProgress(): boolean {
    return this.loginService.inProgress();
  }
}