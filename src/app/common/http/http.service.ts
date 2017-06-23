import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    /**
     * Call a get WS
     * @param url
     */
    get(url: string): Observable<any> {
        return this.http.get(url)
            .map(response => {
                console.debug('HttpService.get.response', response);
                return response.json();
            })
            .catch(this.handleError);
    }

    /**
     * Call a post WS
     * @param url 
     * @param data 
     */
    post(url: string, data: any): Observable<any> {
        return this.http.post(url, data)
            // .share()
            .map(response => {
                console.debug('HttpService.post.response', response);
                return response.json();
            })
            .catch(this.handleError);
    }

    /**
     * Handle the error
     * @param error 
     */
    private handleError(error: Response) {
        console.error('Erreur', error.json());
        return Observable.throw('Err');
    }
}