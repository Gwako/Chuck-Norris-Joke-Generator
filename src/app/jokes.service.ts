import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private API_BASE_URL = 'https://api.icndb.com';
  private newUrl = 'https://api.chucknorris.io/jokes/random';
  constructor(private http: HttpClient) { }

  // get random jokes
  getRandomJokes(): Observable<any> {
    return this.http.get<any>(`${this.API_BASE_URL}/jokes/random/3`)
    .pipe(
      map((jokes: any) => {

        console.log('results: ', jokes.value);
        return jokes.value;
      }),
      catchError(this.handleError('getRandomJokes', []))
    );
  }

  getRandomJokeWithNames(fname, lname): Observable<any> {
    return this.http.get<any>(`${this.API_BASE_URL}/jokes/random?firstName=${fname}&lastName=${lname}`)
    .pipe(
      map((characterJoke: any) => {

        console.log('results character: ', characterJoke.value);
        return characterJoke.value;
      }),
      catchError(this.handleError('getRandomJokeWithNames', []))
    );
  }

  // get a single joke
  getJoke(): Observable<any> {
    return this.http.get<any>(this.newUrl)
    .pipe(
      map((joke: any) => {

        console.log('results: ', joke);
        return joke;
      }),
      catchError(this.handleError('getRandomJokes', []))
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
