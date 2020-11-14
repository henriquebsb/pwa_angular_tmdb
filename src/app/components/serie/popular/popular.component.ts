import { Component, OnInit } from '@angular/core';
import { TvShowService } from 'src/app/services/tv-show.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  series = {
    popular: {
      results: []
    }
  };

  constructor(
    private _serviceTvShow: TvShowService
  ) { }

  ngOnInit(): void {
    this.getUpComingMovies();

  }

  getUpComingMovies() {
    this._serviceTvShow.getPopular().subscribe(
      data => {
        this.series.popular = data;
      }
    );
  }
}
