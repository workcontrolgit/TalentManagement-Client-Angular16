import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { TranslateModule } from '@ngx-translate/core';

import { EnvConfig } from '@app/core/config/env-config';
import { EnvironmentLoaderService } from '@app/core/config/environment-loader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [TranslateModule],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  protected envConfig?: EnvConfig;

  config?: string;

  constructor(private readonly envService: EnvironmentLoaderService) {}

  ngOnInit() {
    this.envConfig = this.envService.getEnvConfig();
    this.config = JSON.stringify(environment);
  }
}
