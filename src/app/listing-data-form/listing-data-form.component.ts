import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent {
  @Input() buttonText;
  name: string = '';
  description: string = '';
  price: string = '';

  // there is some sort of issue here between @Output and onSubmit
  @Output() = onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router,
  ){ }
  ngOnInit(): void {
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price),
    });
  }
}
