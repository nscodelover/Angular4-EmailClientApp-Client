import {Component} from "@angular/core";
import {LoginService} from "../services/login.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html"
})
export default class AppDashboard {

  constructor(private loginService: LoginService) {
  };

  protected logout(): void {
    this.loginService.logout();
  }
}
