import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ColorState, initialState } from '../../../store/color/color.reducer';
import { changeColor } from 'src/app/store/color/color.action';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-flex-page',
  templateUrl: './flex-page.component.html',
  styleUrls: ['./flex-page.component.css']
})
export class FlexPageComponent {
  menuItems = [
    { label: 'Item 1', color: '#FF5733' },
    { label: 'Item 2', color: '#33FF57' },
    { label: 'Item 3', color: '#3357FF' },
    { label: 'Item 4', color: '#F3FF33' },
    { label: 'Item 5', color: '#FF33A1' },
    { label: 'Item 6', color: '#33FFF5' },
    { label: 'Item 7', color: '#FF8C33' },
    { label: 'Item 8', color: '#8CFF33' },
    { label: 'Item 9', color: '#FF3333' },
    { label: 'Item 10', color: '#3333FF' }
  ];


  constructor(private store:Store<{color:ColorState}>){}
  // Menü öğesi tıklandığında rengi değiştir
  onMenuItemClick(color: string) {
   
    // Arka plan rengini güncelle
    this.store.dispatch(changeColor({color}));
}

onReset(form: NgForm) {
  // Reset the form fields
  form.resetForm();

  // Reset the color in the NgRx store
  this.store.dispatch(changeColor({ color: '' }));
}

}
