import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateLayoutComponent } from './layouts/template-layout/template-layout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CategoryComponent } from './layouts/admin-layout/category/category.component';
import { UpdateCategoryComponent } from './layouts/admin-layout/category/update-category/update-category.component';
import { AddCategoryComponent } from './layouts/admin-layout/category/add-category/add-category.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilLayoutsComponent } from './layouts/profil-layouts/profil-layouts.component';
import { PostReservationComponent } from './views/client/post-reservation/post-reservation.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateLayoutComponent,
    AdminLayoutComponent,
    ProfilLayoutsComponent,
    CategoryComponent,
    UpdateCategoryComponent,
    AddCategoryComponent,
    ProfilLayoutsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgbModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
