import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';

@Component({
  selector: 'app-caroselbanner',
  templateUrl: './caroselbanner.component.html',
  styleUrls: ['./caroselbanner.component.css']
})
export class CaroselbannerComponent implements OnInit {
  newMovie:any=[]
  movies=[]
  constructor(private ds:DataService){}
  ngOnInit(): void {
    this.ds.trentMovieApi().subscribe((Response:any)=>{
      this.newMovie=Response.results
      this.newMovie=this.newMovie.slice(0, 10);
      });
  }
}
