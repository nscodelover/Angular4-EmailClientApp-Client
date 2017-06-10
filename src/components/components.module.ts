import "./components.module.less";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import ErrorLabelComponent from "./error-label.component";
import ProgressDialogComponent from "./progress-dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonGroupModule, ButtonsModule, DropDownButtonModule} from "@progress/kendo-angular-buttons";
import {ServicesModule} from "../services/services.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    ButtonGroupModule,
    DropDownButtonModule,
    ServicesModule
  ],
  declarations: [
    ErrorLabelComponent,
    ProgressDialogComponent,
  ],
  exports: [
    ErrorLabelComponent,
    ProgressDialogComponent
  ],
})
export class ComponentsModule {
}