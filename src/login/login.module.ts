import "./login.module.less";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {UserLoginForm} from "./user-login-form.component";
import {ButtonsModule} from "@progress/kendo-angular-buttons";
import {ComponentsModule} from "../components/components.module";
import {ServicesModule} from "../services/services.module";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    ComponentsModule,
    ServicesModule
  ],
  declarations: [
    UserLoginForm
  ],
  exports: [
    UserLoginForm
  ],
})
export class LoginModule {
}