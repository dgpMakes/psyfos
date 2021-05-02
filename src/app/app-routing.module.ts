import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [  
  { path: '', component: HomeComponent},
  { path: '', component: AppLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
