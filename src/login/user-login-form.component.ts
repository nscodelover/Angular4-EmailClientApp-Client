import {Component} from "@angular/core";
import {LoginService} from "../services/login.service";

@Component({
  selector: "user-login-form",
  templateUrl: "./user-login-form.component.html"
})
export class UserLoginForm {
  protected username: string;
  protected password: string;

  constructor(private loginService: LoginService) {
  }

  protected login(): void {
    this.loginService.login(this.username, this.password);
    this.username = "";
    this.password = "";
  }

  protected getLastError(): string {
    return this.loginService.getLastError();
  }
}