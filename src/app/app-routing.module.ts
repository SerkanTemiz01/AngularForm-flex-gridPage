import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { FlexPageComponent } from './components/layouts/flex-page/flex-page.component';
import { GridPageComponent } from './components/layouts/grid-page/grid-page.component';


const routes: Routes = [
  { path: '', component: LayoutsComponent,
    children:[
      {
        path:'',component:FlexPageComponent
      },
      {
        path:'grid-page',component:GridPageComponent
      }
    ]
   },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
