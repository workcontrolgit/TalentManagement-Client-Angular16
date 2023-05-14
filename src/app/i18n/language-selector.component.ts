import { Component, OnInit, Input } from '@angular/core';

import { I18nService } from './i18n.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  standalone: true,
  imports: [NgbDropdown, NgClass, NgIf, NgbDropdownToggle, NgbDropdownMenu, NgFor, TranslateModule],
})
export class LanguageSelectorComponent implements OnInit {
  @Input() inNavbar = false;
  @Input() menuClass = '';

  constructor(private i18nService: I18nService) {}

  ngOnInit() {}

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
