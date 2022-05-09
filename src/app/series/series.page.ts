import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'series.page.html',
  styleUrls: ['series.page.scss'],
})
export class SeriesPage implements OnInit {
MovieData:any = [];
searchValue:any = [];
  constructor(private movieService:MoviesService) {}

  

  ngOnInit() {
    
    this.movieService.GetMovieData().subscribe(
 (data)=>{
 this.MovieData = data.Search;
 

 }
    );
   }

   updateSearchList() {
    if (this.searchValue === "") {
      this.movieService.GetMovieData().subscribe(
        (data)=>{
        this.MovieData = data.Search;
        
       
        }
           );
    } else {
        this.movieService.GetSeries(this.searchValue).subscribe((data: any[]) => {
           this.MovieData = data['Search'];
        });
    }
  }
}