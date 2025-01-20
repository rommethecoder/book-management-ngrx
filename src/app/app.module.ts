import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { BookReducer } from './books/book.reducer';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({book: BookReducer})
  ]
})
export class AppModule { }
