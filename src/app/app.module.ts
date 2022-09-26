import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChangeTextDirective } from './change-text.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ValidationDirective } from './validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    ReactiveFormComponent,
    ValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
