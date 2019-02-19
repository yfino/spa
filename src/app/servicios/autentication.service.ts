import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AutenticacionService implements OnInit {
constructor(private http: HttpClient) {
    console.log('Service Listo');
}

getToken () {
    const URL = 'https://sbapi.bancolombia.com/security/oauth-otp/oauth2/token';
    const body = new HttpParams().set('grant_type', 'client_credentials').set('client_id', '6e8d695b-14df-4bce-8b91-dde1a5594f70').set('client_secret', 'R3xR7mU5cS8iW8vM3qS0qJ2kS2pW5eJ3dM1cA8lH0fQ8rL4eR3').set('scope', 'Channel:read:app');
    const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/x-www-form-urlencoded');
   return this.http.post(URL, body.toString(), {headers}).subscribe(data => {
       console.log(data);
   });
}

ngOnInit() {
    }
}

