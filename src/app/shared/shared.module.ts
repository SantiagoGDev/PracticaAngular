import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WelcomeComponent } from './_components/welcome/welcome.component';
import { FeatureComponent } from './_components/feature/feature.component';
import { FeaturesComponent } from './_components/features/features.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { DownloadsComponent } from './_components/downloads/downloads.component';
import { QuestionsComponent } from './_components/questions/questions.component';
import { QuestionsService } from '../services/questions.service';
import { DownloadsService } from '../services/downloads.service';
import { FeaturesService } from '../services/features.service';
import { AppRoutingModule } from '../app.routes';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [WelcomeComponent, FeatureComponent, FeaturesComponent, HeaderComponent, FooterComponent, DownloadsComponent, QuestionsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    QuestionsService,
    DownloadsService,
    FeaturesService 
  ],
  exports:[
    WelcomeComponent, FeatureComponent, FeaturesComponent, HeaderComponent, FooterComponent, DownloadsComponent, QuestionsComponent
  ]
})


export class SharedModule {

  constructor(){}
}
