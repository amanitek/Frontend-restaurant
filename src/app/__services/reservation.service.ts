import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8021";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

constructor(private http:HttpClient) { }

postReservation(reservationDto: any): Observable<any> {
  const userId = StorageService.getUserId();
  reservationDto.customerId = userId ? userId.toString() : null;

  console.log(reservationDto);

  return this.http.post<[]>(BASIC_URL + 'api/client/reservation', reservationDto, {
    headers: this.createAuthorizationHeader()
  });
}


createAuthorizationHeader():HttpHeaders{
  let authHeaders:HttpHeaders=new HttpHeaders();
  return authHeaders.set(
    "Authorization","Bearer" +StorageService.getToken()
  );
}



}
