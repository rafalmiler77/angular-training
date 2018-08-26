import { Directive, forwardRef } from '@angular/core';

import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

export function validateIfInteger(control: FormControl) {
  const { value } = control;
  return Number.isInteger(+value) ? null : { notInteger: { value }};
}

@Directive({
  selector: '[appValidateIfInteger]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DurationValidatorDirective) , multi: true }
  ]
})
export class DurationValidatorDirective implements Validator {
  validate = validateIfInteger;
}
