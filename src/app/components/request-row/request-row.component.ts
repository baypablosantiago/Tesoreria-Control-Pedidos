import { Component, Input } from '@angular/core';
import { FundingRequest } from '../../models/FundingRequest';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-row',
  imports: [MatIconModule,MatCardModule,CommonModule],
  templateUrl: './request-row.component.html',
  styleUrl: './request-row.component.scss'
})
export class RequestRowComponent {

  @Input() request!: FundingRequest;
}
