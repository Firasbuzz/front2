import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollspyDirective } from './scrollspy.directive';
import { CountToModule } from 'angular-count-to';
import { NgbAccordionModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { ClientComponent } from './client/client.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Services2Component } from './services2/services2.component';
import { Features2Component } from './features2/features2.component';
import { Client2Component } from './client2/client2.component';
import { FaqComponent } from './faq/faq.component';
import { Pricing2Component } from './pricing2/pricing2.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationSComponent } from './information-s/information-s.component';
import { ImageSliderModule } from "../imageSlider/imageSlider.module";
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { MapComponent } from './map/map.component';
import { UserComponent } from './user/user.component';
import { UserControlComponent } from './user-control/user-control.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
    declarations: [
        ScrollspyDirective,
        ServicesComponent,
        FeaturesComponent,
        ClientComponent,
        PortfolioComponent,
        PricingComponent,
        ContactComponent,
        FooterComponent,
        Services2Component,
        Features2Component,
        Client2Component,
        FaqComponent,
        Pricing2Component,
        LoginComponent,
        SignUpComponent,
        InformationSComponent,
        MapComponent,
        UserComponent,
        UserControlComponent,
        InscriptionComponent,
    ],
    exports: [ServicesComponent, FeaturesComponent, ClientComponent, PortfolioComponent, PricingComponent, ContactComponent, FooterComponent, FeatherModule, ScrollspyDirective, Services2Component, Features2Component, Client2Component, FaqComponent, Pricing2Component, LoginComponent, SignUpComponent, InformationSComponent,MapComponent,Services2Component,UserComponent,UserComponent,UserControlComponent,InscriptionComponent,],
    imports: [
        CommonModule,
        CarouselModule,
        ScrollToModule.forRoot(),
        FeatherModule.pick(allIcons),
        CountToModule,
        NgbAccordionModule,
        NgbRatingModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        ImageSliderModule,
        NgxMapLibreGLModule,
        CarouselModule ,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
