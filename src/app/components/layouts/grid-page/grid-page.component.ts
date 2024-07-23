import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColorState } from '../../../store/color/color.reducer';
import { changeColor } from 'src/app/store/color/color.action';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.css']
})
export class GridPageComponent {
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
  // Seçili rengin saklanması
  selectedColor: string = '';

  // Menü öğesi tıklandığında rengi değiştir
  onMenuItemClick(color: string) {
    this.selectedColor = color;
    // Arka plan rengini güncelle
    this.store.dispatch(changeColor({color}));
    console.log(this.selectedColor);
}
onReset(form: NgForm) {
  // Reset the form fields
  form.resetForm();

  // Reset the color in the NgRx store
  this.store.dispatch(changeColor({ color: '' }));
}
}
