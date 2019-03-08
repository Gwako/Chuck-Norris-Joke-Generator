import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jokes: any[];
  joke: any;
    constructor( private jokesService: JokesService) { }

  ngOnInit() {
    this.getRandomJokes();
    this.getJoke();
  }
   // get random jokes
  getRandomJokes(): void {
    this.jokesService.getRandomJokes()
    .subscribe(jokes => this.jokes = jokes);
  }
  // get a single joke of the day
  getJoke(): void {
    this.jokesService.getJoke()
    .subscribe(joke => this.joke = joke);
  }

   // get a single joke by a characters's name
 getJokeWithName(fullname: string) {
 const names = fullname.split(' ');
 this.jokesService.getRandomJokeWithNames(names[0], names[1])
 .subscribe(joke => this.joke.value = joke.joke);

 }
  refreshJokes() {
    this.getRandomJokes();
  }
  refreshJoke() {
    this.getJoke();
  }

}
