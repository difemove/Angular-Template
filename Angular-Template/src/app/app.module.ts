import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { CustomerTypesComponent } from './Component/customer-types/customer-types.component';
import { MatInputModule } from '@angular/material';

import { ContractTypesComponent } from './Component/contract-types/contract-types.component';
import { ProductsComponent } from './Component/products/products.component';
import { WarrantiesComponent } from './Component/warranties/warranties.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {EventEmitter } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    CustomerTypesComponent,
    
    ContractTypesComponent,
    ProductsComponent,
    WarrantiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule, BrowserAnimationsModule, FormsModule,
    MatSlideToggleModule, MatRadioModule, MatCardModule,
  MatCheckboxModule,
    EventEmitter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
