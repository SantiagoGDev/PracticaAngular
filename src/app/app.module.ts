import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import { routing } from './app.routes';

//Services
import { QuestionsService } from './services/questions.service';
import { DownloadsService } from './services/downloads.service';
import { FeaturesService } from './services/features.service';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FeaturesComponent } from './components/features/features.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { FeatureComponent } from './components/feature/feature.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    FeaturesComponent,
    LoginComponent,
    QuestionsComponent,
    DownloadsComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    QuestionsService,
    DownloadsService,
    FeaturesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
