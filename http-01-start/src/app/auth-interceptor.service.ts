import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this will be ran BEFORE the HTTP request leaves our application
    if (req.method === "POST") {
      console.log("This is a POST");
    } else {
      console.log("Req that is not A POST is on his way");
    }

    const modifiedReq = req.clone({
      headers: req.headers.append("Auth", "xyz"),
    });

    return next.handle(modifiedReq).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
        }
      })
    );
  }
}
