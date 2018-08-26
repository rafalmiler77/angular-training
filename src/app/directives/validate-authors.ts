import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { Author2 } from 'app/entities/author2.model';

export function validateAuthors(control: FormControl, allAuthors: Author2[]) {
  const { value } = control;
  if (allAuthors.length === 0) {
    return null;
  }
  const authors = allAuthors.map(item => item.name);
  let isValid = false;
  authors.forEach(item => {
    if (item.slice(0, value.length) === value) {
      isValid = true;
    }
  });
  return (!isValid) ? { notExisting: { value }} : null;
}

@Directive({
  selector: '[appValidateAuthors]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AuthorsValidatorDirective) , multi: true }
  ]
})
export class AuthorsValidatorDirective implements Validator {
  @Input('appValidateAuthors') appValidateAuthors;

  validate = (formControl) => validateAuthors(formControl, this.appValidateAuthors);
}
