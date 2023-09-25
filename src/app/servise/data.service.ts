import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  trentMovieApi(){
   return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0bfbf2c797d125288e420471c0433a49&append_to_response=videos,images')
  }
  PopularMovieApi(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=0bfbf2c797d125288e420471c0433a49&append_to_response=videos,images')
  }
  TopRatedApi(){
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0bfbf2c797d125288e420471c0433a49&append_to_response=videos,images')
  }
  UpcomingApi(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0bfbf2c797d125288e420471c0433a49&append_to_response=videos,images')
  }
}
