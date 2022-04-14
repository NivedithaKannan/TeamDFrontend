import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Totaldefects } from './totaldefects';
@Injectable()
export class TotaldefectsService {

  private TotaldefectsUrl = 'http://localhost:2022/totalDefects';
  constructor(private http: HttpClient){}
  findTotalDefects():Observable<Totaldefects[]>{
    return this.http.get<Totaldefects[]>(this.TotaldefectsUrl);
  }
}
