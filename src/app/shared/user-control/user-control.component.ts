import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {
  name:string=""
  email:string=""
  password:string=""
  last_name:String=""
  status = false;
  n:string='';
  l:string='';
  e:string='';
  p:string='';
  id:string="";
  addToggle()
  {
    this.status = !this.status;       
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log( localStorage.getItem('userId'))
    this.http.get("http://localhost:5000/user/get/"+`${localStorage.getItem('userId')}`).subscribe((result: any)=>
    {
        console.log(result.user);
        this.e = result.user.email;
        this.p = result.user.password;
        this.n = result.user.name;
        this.l = result.user.last_name;
     this.id=result.user._id;
      })
  }
  update()
  {
   let bodyData =
   {
     "name" : this.name ? this.name : this.n,
     "last_name" : this.last_name ? this.last_name:this.l,
     "email" : this.email ? this.email:this.e,
     "password" : this.password ? this.password:this.p
   };
   this.http.put("http://localhost:5000/user/update/"+this.id,bodyData).subscribe((result: any)=>
   {})
   location.reload()
}

}
