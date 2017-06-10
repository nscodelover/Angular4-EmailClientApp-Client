import {Component} from "@angular/core";

@Component({
  selector: "login",
  template: `<div class='ma-form-page ma-login-page'>
                <user-login-form></user-login-form>
            </div>`
})
export default class LoginPage {
  constructor() {
  }
}