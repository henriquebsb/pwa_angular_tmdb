// Angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Configurações
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './components/login/login.component';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { SideBarComponent } from './components/master-page/side-bar/side-bar.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SearchComponent } from './components/search/search.component';
import { UpcomingComponent } from './components/movie/upcoming/upcoming.component';
import { TrendingComponent } from './components/movie/trending/trending.component';

// Terceiros
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PopularComponent } from './components/serie/popular/popular.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    MasterPageComponent,
    SideBarComponent,
    MovieComponent,
    SerieComponent,
    SettingsComponent,
    SearchComponent,
    UpcomingComponent,
    TrendingComponent,
    PopularComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
