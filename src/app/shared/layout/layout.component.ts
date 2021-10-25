import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoggedService } from '../services/user-logged/user-logged.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  userName: string = 'Não Indentificado';

  constructor(
    private userLoggedService: UserLoggedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userName = this.userLoggedService.name;
  }

  disconnect(){
    this.userLoggedService.disconnect();
    this.router.navigate(['/login']);
  }

}
