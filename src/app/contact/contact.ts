import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ChildComponet } from './child-componet/child-componet';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ChildComponet],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class Contact {
  cdref = inject(ChangeDetectorRef)
  //showForm = false;
//   contacts: any[] = [];
//  editIndex: number | null = null;
//   selectedContact: any = null;

//   openForm() {
//     this.showForm = true;
//     console.log("ABC")
//     this.cdref.detectChanges()
//      this.selectedContact = null;
//     this.editIndex = null;
//   }

//  addContactToParent(contact: any) {
//     if (this.editIndex !== null) {
//       this.contacts[this.editIndex] = contact;   // update
//     } else {
//       this.contacts.push(contact);               // add
//     }
//     this.showForm = false;
//   }

//   editContact(contact: any, index: number) {
//     this.selectedContact = contact;
//     this.editIndex = index;
//     this.showForm = true;
//   }

//   deleteContact(index: number) {
//     this.contacts.splice(index, 1);
//   }

contacts: any[] = [];

showForm = false;
selectedContact: any = null;
editIndex: number | null = null;

openForm() {
  this.showForm = true;
  this.selectedContact = null;
  this.editIndex = null;
}

closeForm() {
  this.showForm = false;
  this.selectedContact = null;
  this.editIndex = null;
}

editContact(contact: any, index: number) {
  this.selectedContact = { ...contact }; // clone
  this.editIndex = index;
  this.showForm = true;
}

deleteContact(index: number) {
  this.contacts.splice(index, 1);
}

addContactToParent(contact: any) {
  if (this.editIndex !== null) {
    this.contacts[this.editIndex] = contact; // update
  } else {
    this.contacts.push(contact); // add
  }
  this.closeForm();
}

}
