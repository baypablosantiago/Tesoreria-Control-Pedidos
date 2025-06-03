import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FundingRequest } from '../models/FundingRequest';

@Injectable({
  providedIn: 'root'
})
export class FundingRequestService {

  private apiUrl = 'http://localhost:5254/api/FundingRequest';

  constructor(private http: HttpClient) { }

  getAllFundingRequest(): Observable<FundingRequest[]> {
    return this.http.get<FundingRequest[]>(this.apiUrl);
  }
}
