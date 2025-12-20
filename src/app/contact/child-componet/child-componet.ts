import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-componet',
  imports: [FormsModule,CommonModule],
  templateUrl: './child-componet.html',
  styleUrl: './child-componet.css',
})
export class ChildComponet {
      name = '';
      phone = '';
      email = '';
phoneError = false;
emailError = false;
 @Input() editContactData: any; 
  @Output() contactAdded = new EventEmitter<any>();
isEdit: any;
ngOnChanges() {
    if (this.editContactData) {
      this.name = this.editContactData.name;
      this.phone = this.editContactData.phone;
      this.email = this.editContactData.email;
      this.isEdit = true;
    } else {
      this.reset();
    }
  }
  addContact() {
    const contact = {
      name: this.name,
      phone: this.phone,
      email: this.email
    };

    this.contactAdded.emit(contact);

this.reset();
  }

  reset() {
    this.name = '';
    this.phone = '';
    this.email = '';
    this.isEdit = false;
  }
submit() {
  this.phoneError = !/^\d{10}$/.test(this.phone);
  this.emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);

  if (this.phoneError || this.emailError) return;

  this.contactAdded.emit({
    name: this.name,
    phone: this.phone,
    email: this.email
  });

  this.name = '';
  this.phone = '';
  this.email = '';
}
  }


