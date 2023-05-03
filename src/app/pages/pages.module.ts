import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { IndexComponent } from './index/index.component';
import { LayoutOne1Component } from './layout-one1/layout-one1.component';
import { LayoutOne2Component } from './layout-one2/layout-one2.component';
import { LayoutOne3Component } from './layout-one3/layout-one3.component';
import { LayoutOne4Component } from './layout-one4/layout-one4.component';
import { LayoutOne5Component } from './layout-one5/layout-one5.component';
import { LayoutOne6Component } from './layout-one6/layout-one6.component';
import { LayoutTwo1Component } from './layout-two1/layout-two1.component';
import { HomeComponent } from './home/home.component';
import { LayoutTwo3Component } from './layout-two3/layout-two3.component';
import { LayoutTwo4Component } from './layout-two4/layout-two4.component';
import { LayoutTwo5Component } from './layout-two5/layout-two5.component';
import { LayoutTwo6Component } from './layout-two6/layout-two6.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    IndexComponent,
    LayoutOne1Component,
    LayoutOne2Component,
    LayoutOne3Component,
    LayoutOne4Component,
    LayoutOne5Component,
    LayoutOne6Component,
    LayoutTwo1Component,
    HomeComponent,
    LayoutTwo3Component,
    LayoutTwo4Component,
    LayoutTwo5Component,
    LayoutTwo6Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    CarouselModule,
    NgbAccordionModule,
    NgxYoutubePlayerModule,
    HttpClientModule
  ]
})
export class PagesModule { }
