import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Workspaces } from '../workspaces/workspaces.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent {

  state = 'success';
  message = '';

  username = '';
  password = '';

  constructor(
    private httpClient: HttpClient,
    private workspaces: Workspaces
  ) {
  }

  login(): void {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.state = '';
    this.message = '... sending request ...';

    this.httpClient.post(
      environment.baseUrl + '/login',
      {
        n: this.username,
        p: this.password
      },
      {headers}
    ).subscribe(
      (data: any) => {
        this.message = 'Login successful';
        this.state = 'success';
        this.workspaces.list = data.workspaces;
      },
      (err: HttpErrorResponse) => {
        this.state = 'error';
        console.log(err);
        if (err.error instanceof Error) {
          this.message = 'Client-side error occurred.';
        } else {
          if (err.status === 401) {
            this.message = 'Login credentials seems to be wrong';
          } else {
            this.message = 'Server-side error occurred:' + err.message;
          }
        }
      }
      );
  }



}
