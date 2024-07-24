import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { FlexPageComponent } from './components/layouts/flex-page/flex-page.component';
import { GridPageComponent } from './components/layouts/grid-page/grid-page.component';
import { colorReducer } from './store/color/color.reducer';



@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    FlexPageComponent,
    GridPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    StoreModule.forRoot({color:colorReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
