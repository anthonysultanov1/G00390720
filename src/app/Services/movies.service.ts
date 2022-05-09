import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }


//this is the api to show avengers films
  GetMovieData():Observable<any>{
   return this.httpClient.get('http://www.omdbapi.com/?apikey=e06de9c4&s=%27avengers%27');
  }

//this is the api to show if u search
  GetSearch(query: string):Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=e06de9c4&s=' + query);
  }

//this is the api to show series
  GetSeries(query: string):Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=e06de9c4&type=series&s=' + query)
  }

}
