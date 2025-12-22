import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject, signal } from '@angular/core';
import { ChildComponet } from './child-componet/child-componet';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ChildComponet, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class Contact {

    cdref = inject(ChangeDetectorRef);

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
    this.selectedContact = { ...contact };
    this.editIndex = index;
    this.showForm = true;
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  addContactToParent(contact: any) {

    if (this.editIndex !== null) {
      // UPDATE
      this.contacts[this.editIndex] = contact;
    } else {
      // ADD
      this.contacts.push(contact);
    }

    this.closeForm();
  }
}
