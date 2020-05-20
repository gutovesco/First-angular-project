import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/NavBar/nav-bar.component';
import { FullBannerComponent } from './shared/full-banner/full-banner.component';
import { ListTittlesComponent } from './shared/list-tittles/list-tittles.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TitlesComponent } from './shared/titles/titles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTittlesComponent,
    FooterComponent,
    TitlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
