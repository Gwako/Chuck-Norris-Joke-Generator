import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private API_BASE_URL = 'https://api.icndb.com';

  constructor(private http: HttpClient) { }

    // getting explicit jokes
    getCatExplicit(): Observable<any> {
      return this.http.get<any>(`${this.API_BASE_URL}/jokes/random/5?limitTo=[explicit]`)
      .pipe(
        map((explicit: any) => {
          console.log('explicit: ', explicit.value);
          return explicit.value;
        }),
        catchError(this.handleError('Explicit:', []))
      );
    }
    // getting nerdy jokes
    getCatNerdy(): Observable<any> {
      return this.http.get<any>(`${this.API_BASE_URL}/jokes/random/12?limitTo=[nerdy]`)
      .pipe(
        map((nerdy: any) => {
          console.log('nerdy: ', nerdy.value);
          return nerdy.value;
        }),
        catchError(this.handleError('Nerdy:', []))
      );
    }
  // handling the errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
