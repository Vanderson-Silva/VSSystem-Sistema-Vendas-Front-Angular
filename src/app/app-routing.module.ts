import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {
    path: '',component:NavbarComponent, canActivate:[AuthGuard],children:[
      {path: 'home',component: HomeComponent},
      {path: 'clientes', component: ClienteListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
