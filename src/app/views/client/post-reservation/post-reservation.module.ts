import { PostReservationComponent } from './post-reservation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostReservationRoutingModule } from './post-reservation-routing.module';



@NgModule({
  declarations: [
    // PostReservationComponent,
  ],
  imports: [
    CommonModule,
    PostReservationRoutingModule,
  ]
})
export class PostReservationModule { }
