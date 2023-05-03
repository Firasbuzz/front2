import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL= environment.baseURL
  constructor(private http:HttpClient) { }
  baseAPI=environment.baseURL

  public upload_pdf_user(image: File,id:string): Observable<Response> {
    const formData = new FormData();

    formData.append('file', image);

    return this.http.post<Response>(`http://localhost:5000/upload_pdf_user/${id}`, formData);
  }

  Register(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/feedback/add`,data)
  }
  gettAllSeminaires():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseAPI}/siminaire/sim/all`)
  }
  getSeminaires(id: string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseAPI}/siminaire/sim/all/`+id)
  }
}
