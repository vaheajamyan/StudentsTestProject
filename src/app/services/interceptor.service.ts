import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    const clone = req.clone({
      headers: header
    });
    return next.handle(clone)
        .pipe(
            catchError(this.handleError)
        );
  }
}
