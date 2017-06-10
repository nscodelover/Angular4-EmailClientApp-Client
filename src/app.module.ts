import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {MainModule} from "./main/main.module";
import {ComponentsModule} from "./components/components.module";
import {appRoutes} from "./main/routes";
import {ServicesModule} from "./services/services.module";


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: false}),
    FormsModule,
    MainModule,
    ComponentsModule,
    ServicesModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
