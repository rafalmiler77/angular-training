import { Component, OnInit, EventEmitter, Output, Input, forwardRef } from '@angular/core';
import { FormControl, FormBuilder, FormArray, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Author } from 'app/entities/course.model';
import { Author2 } from 'app/entities/author2.model';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true
    }
  ]
})
export class AuthorsInputComponent implements OnInit {

  @Output()
  authorsChange: EventEmitter<number> = new EventEmitter();

  @Input()
  public authorsArray: Author[] = [];

  @Input()
  public allAuthors: Author2[] = [];

  public allAuthorsFiltered: Author2[] = [];

  constructor(private fb: FormBuilder) { }

  public authors: FormGroup;

  public ngOnInit () {
    this.authors = this.fb.group({
      newAuthor: new FormControl(''),
      names: this.fb.array([])
    });
    this.populateWithAuthors(this.authorsArray);
    this.setInputSubscription();
  }

  public get names(): FormArray {
    return this.authors.get('names') as FormArray;
  }
  public get newAuthor(): FormControl {
    return this.authors.get('newAuthor') as FormControl;
  }

  public handleSubmit() {
    this.addNewAuthor();
    this.clearAuthorsForm();
  }
  public handleAllAuthorsClick(id) {
    this.chooseNewAuthor(id);
  }
  public handleRemove(i) {
    this.removeAuthor(i);
  }

  private setInputSubscription() {
    const inputValueChanges$ = this.authors.controls['newAuthor'].valueChanges;
    inputValueChanges$.subscribe(inputValue => this.handleFormChange(inputValue));
  }

  private handleFormChange(inputValue) {
    if (inputValue.length === 0) {
      return this.allAuthorsFiltered = [];
    }
    this.allAuthorsFiltered = this.allAuthors.filter(author => inputValue === author.name.slice(0, inputValue.length));
  }

  private populateWithAuthors(authorsArray): void {
    authorsArray.forEach(author => {
      return this.names.push(this.buildAuthorTag(author));
    });
  }

  private buildAuthorTag(author): FormGroup {
    return this.fb.group({
      authorsName: `${author.firstName} ${author.lastName}`
    });
  }

  private removeAuthor(index) {
    this.names.removeAt(index);
  }

  private addNewAuthor() {
    const newAuthor = this.newAuthor.value;
    const newAuthorGroup = this.fb.group({
      authorsName: newAuthor,
    });
    this.names.push(newAuthorGroup);
  }
  private chooseNewAuthor(id) {
    const newAuthor: Author2 = this.allAuthors.find((author) => author.id === id);
    const newAuthorGroup = this.fb.group({
      authorsName: newAuthor.name,
    });
    this.names.push(newAuthorGroup);
    this.emitAuthors();
    this.clearAuthorsForm();
  }

  private clearAuthorsForm() {
    this.authors.patchValue({
      newAuthor: ''
    });
  }
  private checkIfAlreadyExists(checkedName: string): Author | boolean {
    let result: Author | boolean = false;
    this.authorsArray.forEach((author, index) => {
      const fullName = `${author.firstName} ${author.lastName}`;
      if (fullName === checkedName) {
        result = this.authorsArray[index];
      }
    });
    return result;
  }

  private emitAuthors() {
    const currentAuthors = this.names.value.map(item => {
      const alreadyExists: Author | boolean = this.checkIfAlreadyExists(item.authorsName);
      if (alreadyExists) {
        return alreadyExists;
      }

      const separateNames = item.authorsName.split(' ');
      return ({
        firstName: separateNames[0],
        lastName: separateNames[1],
        id: null
      });
    });
    this.authorsChange.emit(currentAuthors);
  }

  public get isValid(): boolean {
    return this.authors.valid;
  }

  public writeValue(obj: any): void {
    if (obj) {
      this.authors = obj;
    }
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {}

  private propagateChange = (_: any) => { };

}
