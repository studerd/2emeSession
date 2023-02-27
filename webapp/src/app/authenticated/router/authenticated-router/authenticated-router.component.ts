import {Component, OnInit} from '@angular/core';
import {AuthService} from '@security/service/auth.service';
import {AppPageEnum, MenuLinkItem} from '@shared/model';

@Component({
  selector: 'app-authenticated-router',
  templateUrl: './authenticated-router.component.html',
  styleUrls: ['./authenticated-router.component.scss']
})
export class AuthenticatedRouterComponent implements OnInit{
  showMenu: boolean = false;
  menu: MenuLinkItem[] = [];

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.initMenu();
  }

  initMenu(): void {
    this.menu = []
  }

  navigate(link: AppPageEnum) {
    this.authService.navigation.navigate(link);
  }
}
