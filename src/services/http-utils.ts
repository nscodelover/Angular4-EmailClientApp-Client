import {Headers, RequestOptions} from "@angular/http";

export function buildRequestOptions(object: Object): RequestOptions {
  return new RequestOptions({
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(object)
  });
}
