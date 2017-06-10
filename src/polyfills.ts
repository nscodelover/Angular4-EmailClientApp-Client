import "core-js/es6";
import "core-js/es7/reflect";
require("zone.js/dist/zone");

if (process.env.NODE_ENV === "development") {
  /* Until issue https://github.com/angular/zone.js/issues/691 not solved
   Error["stackTraceLimit"] = Infinity;
   require("zone.js/dist/long-stack-trace-zone");
   */
}