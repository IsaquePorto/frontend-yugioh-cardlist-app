import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/template/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CartasCrudComponent } from './components/views/cartas-crud/cartas-crud.component';
import { CartasCreateComponent } from './components/cartas/cartas-create/cartas-create.component';
import { MouseDirective } from './directives/mouse.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { MatSelectModule } from '@angular/material/select';
import { CartasReadComponent } from './components/cartas/cartas-read/cartas-read.component';
import { CartasListReadComponent } from './components/cartas/cartas-list-read/cartas-list-read.component'

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { A11yModule } from '@angular/cdk/a11y';
import { CartasReadEditionComponent } from './components/cartas/cartas-read-edition/cartas-read-edition.component';
import { CartasEditionComponent } from './components/cartas/cartas-edition/cartas-edition.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartasCrudComponent,
    CartasCreateComponent,
    MouseDirective,
    CartasReadComponent,
    CartasListReadComponent,
    CartasReadEditionComponent,
    CartasEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    NgbModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
