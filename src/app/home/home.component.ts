import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovie:any=[]
  TopRated:any=[]
  Upcomming:any=[]
  constructor(private ds:DataService){}

  ngOnInit(): void {
      
      this.ds.PopularMovieApi().subscribe((ResponsePopular:any)=>{
        this.popularMovie=ResponsePopular.results
      })
      this.ds.TopRatedApi().subscribe((ResponseTopReted:any)=>{
        this.TopRated=ResponseTopReted.results
      })
      this.ds.UpcomingApi().subscribe((ResponseUpcoming:any)=>{
        this.Upcomming=ResponseUpcoming.results
      })
  }

}
