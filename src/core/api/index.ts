import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

export const API_URL = "https://panjs.com/ywc.json";

export const getData = <T = any>(url: string) => {
  return ajax.getJSON<T>(url).pipe(
    catchError(error => {
      console.log("error: ", error);
      return of(error);
    })
  );
};

export interface PanJSApiResponse {
  navbarItems: { label: string; href: string }[];
  duration: string;
  detail: string;
  condition: string;
}
