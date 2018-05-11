import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDeprecatedComponent } from './template-deprecated/template-deprecated.component';
import { MarkAsPendingComponent } from './mark-as-pending/mark-as-pending.component';

const routes: Routes = [
  {
    path : 'deprecated-template',
    component : TemplateDeprecatedComponent
  },
  {
    path : 'mark-as-pending',
    component : MarkAsPendingComponent
  }
];

@NgModule( {
  imports : [ RouterModule.forRoot( routes ) ],
  exports : [ RouterModule ]
} )
export class AppRoutingModule {}
