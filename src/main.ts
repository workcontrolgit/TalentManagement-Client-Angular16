/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode, importProvidersFrom, APP_INITIALIZER } from '@angular/core';

import { environment } from '@env/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { HomeModule } from './app/home/home.module';
import { ShellModule } from './app/shell/shell.module';
import { CoreModule } from '@app/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { ApiPrefixInterceptor, ErrorHandlerInterceptor, RouteReusableStrategy, SharedModule } from '@shared';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { EnvironmentLoaderService } from './app/core/config/environment-loader.service';

if (environment.production) {
  enableProdMode();
}

const initAppFn = (envService: EnvironmentLoaderService) => {
  return () => envService.loadEnvConfig('/assets/config/app-config.json');
};

bootstrapApplication(AppComponent, {
  providers: [
    EnvironmentLoaderService,
    {
      provide: APP_INITIALIZER,
      useFactory: initAppFn,
      multi: true,
      deps: [EnvironmentLoaderService],
    },
    importProvidersFrom(
      BrowserModule,
      ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
      FormsModule,
      RouterModule,
      TranslateModule.forRoot(),
      NgbModule,
      CoreModule.forRoot(),
      SharedModule,
      ShellModule,
      HomeModule,
      AppRoutingModule
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
