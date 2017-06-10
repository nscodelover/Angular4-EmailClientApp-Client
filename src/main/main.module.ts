import "./main.module.less";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import AppDashboard from "./dashboard.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ButtonsModule} from "@progress/kendo-angular-buttons";
import LoginPage from "./login-page.component";
import {LoginModule} from "../login/login.module";
import {RouteController} from "./route-controller.service";
import {ServicesModule} from "../services/services.module";
import {ComponentsModule} from "../components/components.module";
import Mailbox from "./mailbox.component";
import MailboxFolder from "./mailbox-folder.component";
import MailboxMessageListItem from "./mailbox-message-list-item.component";
import {GmailService} from "../services/gmail.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ButtonsModule,
    LoginModule,
    ServicesModule,
    ComponentsModule
  ],
  declarations: [
    AppDashboard,
    LoginPage,
    Mailbox,
    MailboxFolder,
    MailboxMessageListItem,
    GmailService
  ],
  exports: [
    AppDashboard,
    LoginPage,
    Mailbox,
    MailboxFolder,
    MailboxMessageListItem,
    GmailService
  ],
  providers: [
    RouteController
  ],
})
export class MainModule {
}
