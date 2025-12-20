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

// contacts: any[] = [];

// showForm = false;
// selectedContact: any = null;
// editIndex: number | null = null;

// openForm() {
//   this.showForm = true;
//   this.selectedContact = null;
//   this.editIndex = null;
// }

// closeForm() {
//   this.showForm = false;
//   this.selectedContact = null;
//   this.editIndex = null;
// }

// editContact(contact: any, index: number) {
//   this.selectedContact = { ...contact }; // clone
//   this.editIndex = index;
//   this.showForm = true;
// }

// deleteContact(index: number) {
//   this.contacts.splice(index, 1);
// }

// addContactToParent(contact: any) {
//   if (this.editIndex !== null) {
//     this.contacts[this.editIndex] = contact; // update
//   } else {
//     this.contacts.push(contact); // add
//   }
//   this.closeForm();
// }
contacts: any[] = [];
showForm = false;
selectedContact: any = null;
editIndex: number | null = null;
  duplicateError: string | undefined;

/*  page load then localStorage data load */
ngOnInit() {
  const savedData = localStorage.getItem('contacts');
  if (savedData) {
    this.contacts = JSON.parse(savedData);
  }
}

/* 🔹 localStorage update helper */
saveToStorage() {
  localStorage.setItem('contacts', JSON.stringify(this.contacts));
}

openForm() {
  this.showForm = true;
  this.selectedContact = null;
  this.editIndex = null;
}

closeForm() {
  this.showForm = false;
}

editContact(contact: any, index: number) {
  this.selectedContact = { ...contact };
  this.editIndex = index;
  this.showForm = true;
}

deleteContact(index: number) {
  this.contacts.splice(index, 1);
  this.saveToStorage();   // 🔹 storage update
}
addContactToParent(contact: any) {

  /*  DUPLICATE CHECK */
  const isDuplicate = this.contacts.some((c, i) => {
    if (this.editIndex !== null && i === this.editIndex) {
      return false; // ignore same record while edit
    }
    return c.phone === contact.phone || c.email === contact.email;
  });

  if (isDuplicate) {
    this.duplicateError = 'Mobile number or Email already exists';
    return; //  stop add/update
  }

  /*  ADD / UPDATE */
  if (this.editIndex !== null) {
    this.contacts[this.editIndex] = contact;
  } else {
    this.contacts.push(contact);
  }
this.saveToStorage();
  this.closeForm();

}
}
