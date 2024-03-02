import { HTTP_INTERCEPTORS, HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError, tap } from "rxjs";
import { environment } from "../environments/environment.development";
import { Router } from "@angular/router";
import { ErrorService } from "./core/error/error.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private router: Router, private errorService: ErrorService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        if (req.url.startsWith('/api')) {

            req = req.clone({
                url: req.url.replace('/api', environment.appUrl),
                withCredentials: true, // записва cookie , което да използвам 
            });
        }
        return next.handle(req).pipe(
            catchError((error) => {
                if (error.status === 401) {
                    this.router.navigate(['/login']);

                } else {
                    this.errorService.setError(error)

                    this.router.navigate(['/error']);

                }
                return [error]

            })
        )
    }

}
export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS,
}

