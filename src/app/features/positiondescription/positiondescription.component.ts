import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-positiondescription',
  templateUrl: './positiondescription.component.html',
  styleUrls: ['./positiondescription.component.scss'],
  standalone: true,
  imports: [TranslateModule, NgbDatepickerModule],
})
export class PositiondescriptionComponent implements OnInit {
  version: string | null = environment.version;
  closeResult = '';

  constructor(private offcanvasService: NgbOffcanvas) {}
  open(content: any) {
    this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {}
}
