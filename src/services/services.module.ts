import {NgModule} from "@angular/core";
import {LocalStorageService, LocalStorageModule} from "angular-2-local-storage";
import {Http, XHRBackend, RequestOptions, HttpModule} from "@angular/http";
import {LoginService} from "./login.service";
import {HttpController} from "./http-controller";
import {GmailService} from "./gmail.service";

@NgModule({
  imports: [
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: "ma-team-pilot",
      storageType: "localStorage"
    })
  ],
  providers: [
    LoginService,
    GmailService,
    LocalStorageService,
    {
      provide: Http,
      deps: [XHRBackend, RequestOptions],
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpController(backend, options);
      }
    }
  ],
})
export class ServicesModule {
}
