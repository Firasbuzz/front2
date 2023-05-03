import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  status = false;
  n:string='';
  l:string='';
  e:string='';
  p:string='';
  name:string=''
  email:string=''
  filesPdf:any=[]
  participation: string = 'Participation';
  role:string='Role' ;
  paiement:string=''
  Adresse:string=''
  num:string=''
  last:string=''
  seminaireList: any[] = [];
  Sid:string=''
  Rid:string=''
  onFileChangepdf(event:any)  {
    for  (var i =  0; i <  event.target.files.length; i++)  {  
        this.filesPdf.push(event.target.files[i])
        
    }
    
    }
  
  addToggle()
  {
    this.status = !this.status;       
  }
  constructor(private http: HttpClient,private rout :Router,private userservice:UserService,) { }

  ngOnInit(): void {
    this.getAllSeminaires()
    console.log( localStorage.getItem('userId'))
    this.http.get("http://localhost:5000/user/get/"+`${localStorage.getItem('userId')}`).subscribe((result: any)=>
    {
        console.log(result.user);
        this.e = result.user.email;
        this.p = result.user.password;
        this.n = result.user.name;
        this.l = result.user.last_name;
     
      })
      this.http.get("http://localhost:5000/feedback/all").subscribe((result: any)=>
    {
      const feedbackWithIdS = result.find(feedback => feedback.id_S === '641acff1d7fc5d80c64f609e');
console.log(feedbackWithIdS);


        console.log('aaaaaaaaaaaaaaaa',result.feedback );
      
     
      })
      
     
  }
  close()
  {
   this.rout.navigateByUrl('/home');
   this.rout.navigate(['/home']);
   localStorage.removeItem('userId')
  }
  Select()
  {
    this.userservice.getSeminaires(this.Sid).subscribe(data=>{
     this.ss=data
     this.Rid=this.ss.name
    
    }
      )
  }
  ss: any = ''
  inscrire(){
    let userId = `${localStorage.getItem('userId')}`
    console.log(this.filesPdf[0].name);
    this.userservice.getSeminaires(this.Sid).subscribe(data=>{
      this.ss= data[0].name;
     console.log('------',data)
     
      
    /*    */
     })
    let pdf=`assets/user_docs/${userId}/${this.filesPdf[0].name}`
    let bodyData =
    {
      "id_R":this.Rid,
      "id_S":this.Sid,
      "nom" : this.name,
      "prnom" : this.last,
      "email" : this.email,
      "jPaiement" : this.paiement,
      "addrese" :this.Adresse,
      "numT" :this.num,
      "titerInsc" :this.role,
      "pdf":`assets/user_docs/${userId}/${this.filesPdf[0].name}`,
      "id_U":`${localStorage.getItem('userId')}`,

    };
     this.userservice.upload_pdf_user(this.filesPdf[0],userId).subscribe(data=>{
      console.log(this.filesPdf[0]);
      
    }) 
     this.userservice.Register(bodyData).subscribe(data=>{
    //  console.log(data);
      
    })  
   
  }
  getAllSeminaires(){
    this.userservice.gettAllSeminaires().subscribe(data=>{
     this.seminaireList= data;
    console.log('++++++',data)
    
     
   /*    */
    })
   }

}
