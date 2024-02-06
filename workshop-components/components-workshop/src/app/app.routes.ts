import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { ProfileComponent } from '../user/profile/profile.component';

export const routes: Routes = [{
    path: '',
    pathMatch:"full",
    redirectTo: '/home',
},
{
    path: 'home',
    // pathMatch:"full",
    component: HomeComponent,
},
{
    path: 'login',
    component: LoginComponent,

},
{
    path: 'register',
    component: RegisterComponent,
},
{
    path: 'profile',
    component: ProfileComponent,
},

];
