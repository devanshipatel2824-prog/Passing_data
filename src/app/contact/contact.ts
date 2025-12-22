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

  contacts = signal<any[]>([]);
  showForm = signal(false);
  selectedContact = signal<any | null>(null);
  editIndex = signal<number | null>(null);

  openForm() {
    this.showForm.set(true);
    this.selectedContact.set(null);
    this.editIndex.set(null);
  }

  closeForm() {
    this.showForm.set(false);
    this.selectedContact.set(null);
    this.editIndex.set(null);
  }

  editContact(contact: any, index: number) {
    this.selectedContact.set({ ...contact });
    this.editIndex.set(index);
    this.showForm.set(true);
  }

  deleteContact(index: number) {
    this.contacts.update(list => list.filter((_, i) => i !== index));
  }

  saveContact(contact: any) {
    if (this.editIndex() !== null) {
      this.contacts.update(list =>
        list.map((c, i) => i === this.editIndex() ? contact : c)
      );
    } else {
      this.contacts.update(list => [...list, contact]);
    }
    this.closeForm();
  }

}
