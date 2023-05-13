import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '@app/core/auth/auth.service';
import { NgIf, AsyncPipe } from '@angular/common';
import { LanguageSelectorComponent } from '../../i18n/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbNavbar, NgbCollapse, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    NgbNavbar,
    TranslateModule,
    NgbCollapse,
    RouterLink,
    RouterLinkActive,
    LanguageSelectorComponent,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgIf,
    AsyncPipe,
  ],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    this.isAuthenticated = authService.isAuthenticated$;
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  get username(): string | null {
    return this.authService.identityClaims ? (this.authService.identityClaims as any)['name'] : null;
  }
}
