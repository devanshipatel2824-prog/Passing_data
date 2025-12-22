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
   contact = input<any | null>();
  save = output<any>();

  name = signal('');
  phone = signal('');
  email = signal('');

  phoneError = signal(false);
  emailError = signal(false);

  constructor() {
    effect(() => {
      const c = this.contact();
      if (c) {
      this.name.set(c?.name ?? '');
      this.phone.set(c?.phone ?? '');
      this.email.set(c?.email ?? '');
      } else {
        this.reset();
      }
console.log('name is ',this.name());
console.log('phone number is',this.phone());
console.log('email is',this.email());
    });
  }

  submit() {
    this.phoneError.set(!/^\d{10}$/.test(this.phone()));
    this.emailError.set(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email()));

    if (this.phoneError() || this.emailError()) return;

    this.save.emit({
      name: this.name(),
      phone: this.phone(),
      email: this.email(),
    });

    this.reset();
  }

  reset() {
    this.name.set('');
    this.phone.set('');
    this.email.set('');
  }

  }


