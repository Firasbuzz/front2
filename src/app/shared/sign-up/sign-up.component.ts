import { HttpClient } from '@angular/common/http';
import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email: any = '';
  password: any= '';
  name: any = '';
  last_name: any= '';
  showAlert:any=false
  show:boolean= false
  ps:any=false
  p:any=false
  
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 
  msgEmai:any
  newMsg:any
  @Output() okChanged = new EventEmitter<boolean>();
  onS() {
    // Perform login logic and set ok to true
    this.okChanged.emit(true);
  }
  constructor(private rout :Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  register()
  {
    let bodyData =
    {
      "name" : this.name,
      "last_name" : this.last_name,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:5000/user/register",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData.user);
        alert("compte créé avec succes")
        this.rout.navigateByUrl('/user');
           this.rout.navigate(['/user']);
           localStorage.setItem('userId',resultData.user._id)
        
    },error=>{
        
        
        
       
      alert( error.error.errors[0].msg)
  
  });
  }


  
login()
{
  let bodyData =
    {
      "name" : this.name,
      "last_name" : this.last_name,
      "email" : this.email,
      "password" : this.password,
    };
    let bodyd = {
      email: this.email,
      password: this.password,
    };
  fetch('http://localhost:5000/user/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(bodyData)
})
.then(response => response.json())
.then(data => {
  console.log(data.user);
  alert("compte créé avec succes");
  this.rout.navigateByUrl('/user');
  
  // Login the new user
  return fetch('http://localhost:5000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyd )
  });
})
.then(response => response.json())
.then(data => {
  console.log("44444",data);
})
.catch(error => {
  console.error('Error:', error);
});
}
}
