import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeatureComponent } from './components/feature/feature.component';
import { LoginComponent } from './components/login/login.component';


const rutas:Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'login', component:  LoginComponent },
    { path: 'feature/:id', component: FeatureComponent },
    { path: '**', component: HomeComponent }
]

export const routing = RouterModule.forRoot(rutas);