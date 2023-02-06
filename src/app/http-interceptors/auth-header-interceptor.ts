import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { LoaderService } from "../components/loader/loader.service";


@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{

    constructor(private loaderService: LoaderService) {};
    
    intercept(request: HttpRequest<any>, next: HttpHandler ){

        this.loaderService.requestStarted();
        return this.handler(next, request) ;
    }

    handler(next, request) {
        return next.handle(request)
            .pipe(
                tap(
                    (event) => {
                        if (event instanceof HttpResponse) {
                            this.loaderService.requestEnded();
                        }
                    },
                    (error: HttpErrorResponse) => {
                        this.loaderService.resetLoader();
                        throw error;
                    }
                )
            )
    }
}