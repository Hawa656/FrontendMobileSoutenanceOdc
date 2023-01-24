import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FruitsService{
    public API = 'http://localhost:8080';
    public BEER_API = this.API + '/api/legumefruit';

    constructor(public http: HttpClient) {
    }
  
    getFruits(): Observable<any> {
      return this.http.get(this.API + '/lireLegumesFruits');
    }
  }
