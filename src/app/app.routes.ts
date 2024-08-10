import { Routes } from '@angular/router';
import { LoginComponent } from './loginpage/login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: '',component:LoginComponent},
    {path: 'register',component:RegisterComponent}
];
