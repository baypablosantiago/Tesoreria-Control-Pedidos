import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FundingRequest } from '../../models/FundingRequest';
import { RequestRowComponent } from "../request-row/request-row.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-da-card',
  templateUrl: 'da-card.component.html',
  imports: [MatCardModule, MatButtonModule, RequestRowComponent,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaCardComponent {

@Input() requests: FundingRequest[] = [];
@Input() daTitle: string = '';



}