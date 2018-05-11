import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDeprecatedComponent } from './template-deprecated/template-deprecated.component';
import { MarkAsPendingComponent } from './mark-as-pending/mark-as-pending.component';

@NgModule( {
  declarations : [
    AppComponent,
    TemplateDeprecatedComponent,
    MarkAsPendingComponent
  ],
  imports : [
    BrowserModule,
    ReactiveFormsModule,
    HighlightModule.forRoot(),
    AppRoutingModule
  ],
  providers : [],
  bootstrap : [ AppComponent ]
} )
export class AppModule {}
