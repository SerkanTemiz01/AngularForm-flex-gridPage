import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ColorState } from './../../store/color/color.reducer';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {
selectedColor$:Observable<string>;

constructor(private store:Store<{color:ColorState}>){
  this.selectedColor$=store.select(state=>state.color.selectedColor)

}
ngOnInit(): void {
  this.selectedColor$.subscribe(color=>{
    document.documentElement.style.setProperty('--selected-color',color)
    console.log(color)
  })
}
}
