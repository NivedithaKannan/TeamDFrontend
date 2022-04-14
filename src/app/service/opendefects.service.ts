import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opendefects } from './opendefects';

@Injectable()

export class OpendefectsService {
private OpendefectsUrl = "http://localhost:2022/openDefects";
  constructor(private http: HttpClient) {}
  findOpenDefects():Observable<Opendefects[]>{
    return this.http.get<Opendefects[]>(this.OpendefectsUrl);
  }
}
