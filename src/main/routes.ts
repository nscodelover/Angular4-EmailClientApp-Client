import AppDashboard from "./dashboard.component";
import LoginPage from "./login-page.component";
import Mailbox from "./mailbox.component";
import {Routes} from "@angular/router";
import {RouteController} from "./route-controller.service";

export const appRoutes: Routes = [
  {path: "", component: AppDashboard, canActivate: [RouteController]},
  {path: "login", component: LoginPage},
  {path: "mailbox", component: Mailbox},
  {path: '**', redirectTo: "", pathMatch: 'full'}
];
