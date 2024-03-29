import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EMPTY, Observable, catchError, tap } from "rxjs";
import { API_URL } from "./constants";
import { Provider } from "@angular/core";

export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let request = req
        if(req.url.startsWith('/api')){
        
            request = req.clone({
                url: req.url.replace('/api', API_URL)
            })
        }
        return next.handle(request).pipe(tap((req)=>{
            if (req instanceof HttpRequest) {
                console.log("vlvlvl",req);
              }
        }),
         catchError((err:any)=>{
            console.log(err)

            if(err.status === 0 ) return EMPTY;
            return [err]
         })
        )
    }

}

export const apiInterceptorProvider: Provider ={
    provide: HTTP_INTERCEPTORS,
    multi:true,
    useClass: AppInterceptor
}