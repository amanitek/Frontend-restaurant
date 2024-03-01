import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL=["http://localhost:9000"]

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

constructor(private http:HttpClient) { }

postReservation(reservationDto:any):Observable<any>{
  // reservationDto.customerId=StorageService.getUserId();

  return this.http.post<[]>(BASIC_URL + 'api/client/reservation',reservationDto,

  )
}



}
