import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  movies = {
    upcoming: {
      results: {}
    }
  };

  constructor(
    private _serviceMovie: MovieService
  ) { }

  ngOnInit(): void {
    this.getUpComingMovies();
  }

  getUpComingMovies() {
    this._serviceMovie.getUpComing().subscribe(
      data => {
        this.movies.upcoming = data;
      }
    );
  }
}
