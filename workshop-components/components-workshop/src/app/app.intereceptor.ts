import { HTTP_INTERCEPTORS, HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError, tap } from "rxjs";
import { environment } from "../environments/environment.development";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    
        if(req.url.startsWith('/api')){
        
            req = req.clone({
                url: req.url.replace('/api',environment.appUrl),
                withCredentials:true, // записва cookie , което да използвам 
            });
        }
        return next.handle(req);
    }

}
export const appInterceptorProvider: Provider = {
    multi:true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS,
}

 