import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() okChanged = new EventEmitter<boolean>();

  onLogin() {
    // Perform login logic and set ok to true
    this.okChanged.emit(false);
  }
  showAlert:any=false
  show:boolean= false
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 
  email: any = '';
  password: any= '';
    ok:string='no';
msgEmai:any
newMsg:any
  constructor(private rout :Router, private http: HttpClient ) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.email);
    console.log(this.password);
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
    
    
 
        this.http.post("http://localhost:5000/user/login/", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
        
         console.log(resultData);
         this.ok=resultData.msg;
        console.log(this.ok);
        if (resultData && !resultData.user.isAdmin)
        {
      
         this.rout.navigateByUrl('/user');
           this.rout.navigate(['/user']);
           localStorage.setItem('userId',resultData.user._id)
           
        }
      
      },error=>{
        
        
        
       
          this.msgEmai=error.error.errors[0].msg
      
      });
   
    }


}
