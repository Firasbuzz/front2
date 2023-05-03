import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
 
})
export class SeminaireService {
  baseAPI=environment.baseURL
  constructor(private http:HttpClient) { }


gettAllSeminaires():Observable<any[]>{
  return this.http.get<any[]>(`${this.baseAPI}/siminaire/sim/all`)
}
getImgBySemID(id:string){
  return this.http.get<any[]>(`${this.baseAPI}/siminaire/sim/img/all/${id}`)

}
private messageSource = new BehaviorSubject<string>("");
currentMessage = this.messageSource.asObservable();



changeMessage(message: any) {
  this.messageSource.next(message)
}
}
