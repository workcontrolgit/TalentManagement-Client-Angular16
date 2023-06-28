import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { PositiondescriptionComponent } from './positiondescription.component';
import { AuthGuard } from '@app/core/auth/auth-guard.service';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    component: PositiondescriptionComponent,
    data: { title: marker('Positiondescription') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PositiondescriptionRoutingModule {}
