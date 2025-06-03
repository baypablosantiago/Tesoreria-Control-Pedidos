import { Component } from '@angular/core';
import { FundingRequest } from '../../models/FundingRequest';
import { DaCardComponent } from "../da-card/da-card.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [DaCardComponent,CommonModule]
})
export class DashboardComponent {
  allRequests: FundingRequest[] = [
    {
      id: 1,
      da: 122,
      requestNumber: 4567,
      fiscalYear: 2025,
      paymentOrderNumber: 7890,
      concept: 'Adquisición de insumos hospitalarios',
      dueDate: '2025-06-15',
      amount: 1500000.50,
      fundingSource: 'Tesoro Nacional',
      checkingAccount: 'CC123-456789/00',
      comments: 'Compra urgente aprobada por resolución interna'
    },
    {
      id: 2,
      da: 122,
      requestNumber: 4568,
      fiscalYear: 2025,
      paymentOrderNumber: 7891,
      concept: 'Reparación de ambulancias',
      dueDate: '2025-06-20',
      amount: 850000.00,
      fundingSource: 'Fondo Provincial',
      checkingAccount: 'CC123-456789/00',
      comments: ''
    },
    {
      id: 3,
      da: 305,
      requestNumber: 3001,
      fiscalYear: 2025,
      paymentOrderNumber: 8888,
      concept: 'Pago de servicios de limpieza',
      dueDate: '2025-06-10',
      amount: 290000.00,
      fundingSource: 'Tesoro Nacional',
      checkingAccount: 'CC305-999999/00',
      comments: ''
    },
    {
      id: 4,
      da: 305,
      requestNumber: 99999999999,
      fiscalYear: 2025,
      paymentOrderNumber: 8888,
      concept: 'El diablo',
      dueDate: '2025-06-10',
      amount: 290000.00,
      fundingSource: 'Tesoro Nacional',
      checkingAccount: 'CC305-999999/00',
      comments: 'Hostiaaaaaaaaaaaaaaa'
    }
    
  ];

  // Agrupado por DA
  groupedRequests: { da: number; requests: FundingRequest[] }[] = [];

  ngOnInit() {
    this.groupedRequests = this.groupByDA(this.allRequests);
  }

  private groupByDA(requests: FundingRequest[]) {
    const grouped: { [da: number]: FundingRequest[] } = {};

    for (const req of requests) {
      if (!grouped[req.da]) {
        grouped[req.da] = [];
      }
      grouped[req.da].push(req);
    }

    return Object.entries(grouped).map(([da, reqs]) => ({
      da: +da,
      requests: reqs
    }));
  }
}
