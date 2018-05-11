import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component( {
  selector : 'mark-as-pending',
  templateUrl : 'mark-as-pending.component.html',
  styles : []
} )
export class MarkAsPendingComponent implements OnInit {

  personForm = new FormGroup({
    firstName: new FormControl( '', [], [ this.asyncValidator() ] )
  });
  firstName: FormControl;
  controlStatus: string;

  constructor() { }

  ngOnInit() {
    this.personForm
      .get('firstName')
      .statusChanges
      .forEach( ( value: string ) => this.controlStatus = value );
  }

  asyncValidator() {
    // control.markAsPending() is implicitly called here
    // because this is an async validator;

    return ( control: AbstractControl ) => {
      console.log( 'Validating firstName...', control );
      return new Promise( resolve => setTimeout( resolve, 2000 ) );
    };
  }

}
