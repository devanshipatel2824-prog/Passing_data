import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-componet',
  imports: [FormsModule,CommonModule],
  templateUrl: './child-componet.html',
  styleUrl: './child-componet.css',
})
export class ChildComponet {
 name = signal('');
  phone = signal('');
  email = signal('');

  // 🔹 INPUT SIGNAL
  editContactData = input<any>(null);

  // 🔹 OUTPUT SIGNAL
  contactAdded = output<any>();

  constructor() {

    //  EFFECT → CONSOLE LOG WHEN VALUE CHANGES
    effect(() => {
      console.log('ADD THE DATA');
      console.log('Name:', this.name());
      console.log('Phone:', this.phone());
      console.log('Email:', this.email());
    });

    //  EFFECT FOR EDIT MODE
    effect(() => {
      const data = this.editContactData();
      if (data) {
        this.name.set(data.name);
        this.phone.set(data.phone);
        this.email.set(data.email);
      } else {
        this.reset();
      }
     
    });
  }

  submit() {
    this.contactAdded.emit({
      name: this.name(),
      phone: this.phone(),
      email: this.email()
    });

    this.reset();
  }

  reset() {
    this.name.set('');
    this.phone.set('');
    this.email.set('');
  }
}

  


