import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';
import { MainComponent } from './main/main.component';
import { CurrentThemeComponent } from './theme/current-theme/current-theme.component';
import { AuthActivate } from './core/guards/auth.activate';

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
    // canActivate:[AuthActivate],

},
{
    path: 'register',
    // canActivate:[AuthActivate],
    component: RegisterComponent,
},
{
    path: 'profile',
    canActivate:[AuthActivate],
    component: ProfileComponent,
},
{
    path: 'add-theme',
    component: NewThemeComponent,
    canActivate:[AuthActivate],

},

{
    path: 'themes',
    // component: MainComponent,
    children:[
        {
            path:'',
            pathMatch:"full",
            component: MainComponent
        },
        {
            path:':themeId',
            component: CurrentThemeComponent,
        }
    ],
},

];
