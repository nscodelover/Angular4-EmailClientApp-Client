///<reference path="../node_modules/@types/node/index.d.ts"/>
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppModule} from "./app.module";
import "./index.less"

if (process.env.NODE_ENV === "production") {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
