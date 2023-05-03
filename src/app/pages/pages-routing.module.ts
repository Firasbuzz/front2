import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../shared/login/login.component';
import { SignUpComponent } from '../shared/sign-up/sign-up.component';

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
import { InformationSComponent } from '../shared/information-s/information-s.component';
import { MapComponent } from '../shared/map/map.component';
import { Services2Component } from '../shared/services2/services2.component';
import { UserComponent } from '../shared/user/user.component';
import { UserControlComponent } from '../shared/user-control/user-control.component';
import { InscriptionComponent } from '../shared/inscription/inscription.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:SignUpComponent},
  {path:'info',component:InformationSComponent},
  {path:'map',component:MapComponent},
  {path:'ser',component:Services2Component},
  {path:'user',component:UserComponent},
  {path:'userC',component:UserControlComponent},
  {path:'inscription',component:InscriptionComponent},

  {
   

    path: '',
    redirectTo: 'home',
   // redirectTo: 'layout-two-2',

    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'layout-one-1',
    component: LayoutOne1Component
  },
  {
    path: 'layout-one-2',
    component: LayoutOne2Component
  },
  {
    path: 'layout-one-3',
    component: LayoutOne3Component
  },
  {
    path: 'layout-one-4',
    component: LayoutOne4Component
  },
  {
    path: 'layout-one-5',
    component: LayoutOne5Component
  },
  {
    path: 'layout-one-6',
    component: LayoutOne6Component
  },
  {
    path: 'layout-two-1',
    component: LayoutTwo1Component
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'layout-two-3',
    component: LayoutTwo3Component
  },
  {
    path: 'layout-two-4',
    component: LayoutTwo4Component
  },
  {
    path: 'layout-two-5',
    component: LayoutTwo5Component
  },
  {
    path: 'layout-two-6',
    component: LayoutTwo6Component
  },
  {
  path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
