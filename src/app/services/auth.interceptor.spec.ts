import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

describe(`AuthInterceptor`, () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });
  xit('should add an Authorization header', () => {
    service.getUser().subscribe(response => {
      console.log('asas', response);
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`http://localhost:3004/auth/userinfo`);
    expect(httpRequest.request.headers.has('Authorization'));

    expect(httpRequest.request.method).toEqual('GET');
    httpRequest.flush({ hello: 'world' });
    httpMock.verify();
  });
});
