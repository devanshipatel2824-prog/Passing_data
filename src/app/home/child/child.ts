import { Component, computed, effect, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
   name = input.required<string>();
  age = input<number>();

  changename = output<string>();

  changeName(newName: string) {
    if (newName.trim()) {
      this.changename.emit(newName);
    }
  }
  detail = computed(() => {
    return this.name() + ' ' + this.age();
  })
  
  constructor() {
    computed(() => {
      console.log('effect age', this.age());
    });

    effect(() => {
      console.log('effect name', this.name());
    });
    effect(()=>{
      console.log('detail ',this.detail());
})

  }



}


