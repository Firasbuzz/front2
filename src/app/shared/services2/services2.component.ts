import { Component, OnInit } from '@angular/core';
import { SeminaireService } from 'src/app/services/seminaire.service';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.scss']
})
/**
 * Layout-2 services component
 */
export class Services2Component implements OnInit {
  listpart: any;

  constructor(private seminaireService:SeminaireService,private rout:Router,private r:HttpClient) { }


  getAllSeminaires(){
    this.seminaireService.gettAllSeminaires().subscribe(data=>{
     this.seminaireList= data;
    console.log(data[0]._id);
     for (let i = 0; i < data.length; i++) {
    //  console.log(data[i]._id);
    this.getImgBySemID(data[i]._id)
     }
     
   /*    */
    })
   }

   getImgBySemID(id:string){

       this.seminaireService.getImgBySemID(id).subscribe(res=>{
    this.Images=res.map(x=>x.seminaireImage)
    console.log(this.Images);
   // this.seminaireList= data;
    
   })
   }     

   
   getSemById(id:string){

    console.log(id);
    this.seminaireService.changeMessage(id);
    this.seminaireService.currentMessage.subscribe(message => this.message = message)
    localStorage.setItem('semId',this.message)

    console.log('+++++++++')
      
   }

 /*   this.seminaireService.getImgBySemID().subscribe(data=>{
    console.log('images==',data);
   // this.seminaireList= data;
    
   }) */
   
  heading: string = "Séminaires";
  content: string = "";

  seminaireList: any[] = [];
  Images: any[] = [];

  
  ngOnInit(): void {
    this.getAllSeminaires()
 
  }
  public message!: any;


  // sendMessage() {
  //   this.seminaireService.changeMessage(this.message);
  // }
 
}
