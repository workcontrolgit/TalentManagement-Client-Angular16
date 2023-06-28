import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PositiondescriptionRoutingModule } from './positiondescription-routing.module';
import { PositiondescriptionComponent } from './positiondescription.component';

@NgModule({
  imports: [CommonModule, TranslateModule, PositiondescriptionRoutingModule, PositiondescriptionComponent],
})
export class PositionDescriptionModule {}
