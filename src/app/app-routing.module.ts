import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SearchComponent } from './components/search/search.component';
import { UpcomingComponent } from './components/movie/upcoming/upcoming.component';
import { TrendingComponent } from './components/movie/trending/trending.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', redirectTo: 'movie/upcoming', pathMatch: 'full' },
      {
        path: 'movie',
        component: MovieComponent,
        children: [
          { path: '', redirectTo: 'upcoming', pathMatch: 'full' },
          { path: 'upcoming', component: UpcomingComponent },
          { path: 'trending', component: TrendingComponent },
        ]
      },
      { path: 'serie', component: SerieComponent },
      { path: 'search', component: SearchComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
