import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

  constructor(private router:Router, private authService: AuthService, private toast: ToastrService){}

  ngOnInit(): void {
    this.router.navigate([''])
    
  }

  logout(){
    this.router.navigate(['login'])
    this.authService.logout();
      this.toast.info('Logout Realizado com Sucesso','Logout',{timeOut: 7000})
  }

}
