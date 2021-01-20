import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { DailyComponent } from './details/daily/daily.component';
import { HourlyComponent } from './details/hourly/hourly.component';
import { NowComponent } from './details/now/now.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
 
{
  path:'',
  component: HeaderComponent,
  pathMatch: 'full'
},
{
  path:'details',
  component: DetailsComponent,
},
      {
        path: 'Now',
        component: NowComponent
      },
      {
        path: 'Hourly',
        component: HourlyComponent
      },
      {
        path: 'Daily',
        component: DailyComponent
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
