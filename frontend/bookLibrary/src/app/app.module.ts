import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableComponent} from './components/data-table/data-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {ArticleModalFormComponent} from './components/article-modal-form/article-modal-form.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {RegisterComponent} from './components/register/register.component';
import {LoginationComponent} from './components/logination/logination.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RouterModule} from '@angular/router';
import { BookLibraryHomeComponent } from './components/book-library-home/book-library-home.component';
import {AppRoutingModule} from './app-routing.module';
import {SnackbarService} from './services/snackbar-service.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    RegisterComponent,
    LoginPageComponent,
    LoginationComponent,
    ArticleModalFormComponent,
    BookLibraryHomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
