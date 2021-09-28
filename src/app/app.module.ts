import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/nav-bar/nav-bar.component';
import { HeaderComponent } from './Components/header/header.component';
import { IntroductionComponent } from './Components/introduction/introduction.component';
import { FirstSectionComponent } from './Components/first-section/first-section.component';
import { SecondSectionComponent } from './Components/second-section/second-section.component';
import { ThirdSectionComponent } from './Components/third-section/third-section.component';
import { FourthSectionComponent } from './Components/fourth-section/fourth-section.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    IntroductionComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


