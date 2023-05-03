import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';
import { SeminaireService } from 'src/app/services/seminaire.service';
import { DatePipe } from '@angular/common';
import maplibregl, { Map, NavigationControl, Marker } from 'maplibre-gl';
@Component({
  selector: 'app-information-s',
  templateUrl: './information-s.component.html',
  styleUrls: ['./information-s.component.scss']
})
export class InformationSComponent implements OnInit {
  productId: any;
  slides: SlideInterface[] = [];
  value1!: number;
  value2!: number;

  getPosition() {
    const key = '67VFum1pu079YvXBTupT';
    const coordinates = document.getElementById('coordinates');
    const map = new maplibregl.Map({
      container: 'map',
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
      center: [0, 0],
      zoom: 2
    });

    const marker = new maplibregl.Marker({
      draggable: true
    })
      .setLngLat([0, 0])
      .addTo(map);

    const updateCoordinates = (lngLat: maplibregl.LngLat) => {
      coordinates!.style.display = 'block';
      coordinates!.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
      
    };

    const onDragEnd = () => {
      const lngLat = marker.getLngLat();
      updateCoordinates(lngLat);
      map.flyTo({ center: [lngLat.lng, lngLat.lat], zoom: 14 });
    };

    marker.on('dragend', onDragEnd);
    updateCoordinates(marker.getLngLat());
  }

  constructor(private route: ActivatedRoute,private seminaireService:SeminaireService,private modalService: NgbModal) {}
  message!: string;
SInformation:any;
part1:any[]=[]
part2:any[]=[]
part3:any[]=[]
part4:any[]=[]
listpart:string[]=[]
  or:any;
  os:any;
  program: string='../';
  ngOnInit(): void {

    this.seminaireService.getImgBySemID(`${localStorage.getItem('semId')}`).subscribe(data=>{
      let tabImg:string[]= (Object.values(data)[0]).filter((x:any)=>x.seminaireImage).map((x:any)=>x.seminaireImage);
      let tabpart:string[]= (Object.values(data)[0]).filter((x:any)=>x.partnerImage).map((x:any)=>x.partnerImage);
      let tabprog:string= (Object.values(data)[0]).filter((x:any)=>x.program).map((x:any)=>x.program);
      this.listpart=tabpart
      this.program=tabprog
      this.file='../'+this.program[0]
      console.log('oooooooooo'+this.file)
      console.log('pprogram',this.program)
      console.log('partner==',this.listpart);
      this.SInformation=(Object.values(data)[1])
      console.log('information==',this.SInformation)
      this.or=this.SInformation.comite_Organisation ;
      this.os=this.SInformation.comite_Scientifique ;
      this.value1=this.SInformation.lat;
      console.log("lat    ++++"+this.value1)
      this.value2=this.SInformation.lon;
      console.log("long   +++"+this.value2)
     for (let i = 0; i < this.or.length; i++) {
        this.or[i].split('*')[0]
         console.log('aaaaaaaaaa   '+  this.or[i].split('*')[0]) 
         this.part1.push(this.or[i].split('*')[0]) 
         console.log('aaaaaaaaaa   '+  this.or[i].split('*')[1])  
         this.part2.push(this.or[i].split('*')[1]) 

      } 
      for (let i = 0; i < this.os.length; i++) {
        this.os[i].split('*')[0]
         console.log('aaaaaaaaaa   '+  this.os[i].split('*')[0]) 
         this.part3.push(this.os[i].split('*')[0]) 
         console.log('aaaaaaaaaa   '+  this.os[i].split('*')[1])  
         this.part4.push(this.os[i].split('*')[1]) 

      }
     
this.slides=tabImg.map((url) => {
  return {url: url};});
console.log(this.slides);
    })


  }
  file!: string;
get()
{

 console.log(
  this.file)
   
  
}

  
  ok:boolean=true;
  change()
  {
    this.ok=true 
  }
  onOkChanged(value: boolean) {
    this.ok = value;
  }
    currentSection = 'home';
  
    heading: string = "Séminaires De Institut Supérieur De Gestion Gabes ";
  

   
    /**
     * Window scroll method
     */
    // tslint:disable-next-line: typedef
    windowScroll() {
      const navbar = document.getElementById('navbar');
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        if (navbar !== null) {
          navbar.classList.add('nav-sticky');
        }
      }
      else {
        if (navbar !== null) {
          navbar.classList.remove('nav-sticky');
        }
      }
    }
  
    /**
     * Open modal
     * @param content content
     */
    openModal(content: any) {
      this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
  
    /**
     * Section changed method
     * @param sectionId specify the current sectionID
     */
    onSectionChange(sectionId: string) {
      this.currentSection = sectionId;
    }
  
    /**
     * Toggle navbar
     */
    toggleMenu() {
      const nav = document.getElementById('navbarNav');
      if (nav !== null) {
        nav.classList.toggle('show');
      }
    }
  
}
