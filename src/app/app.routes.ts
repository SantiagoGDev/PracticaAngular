import { RouterModule,Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FeatureComponent } from './shared/_components/feature/feature.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';



const routes:Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'feature/:id', component: FeatureComponent},
    { path: '**', component: HomeComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    constructor(){}
}
