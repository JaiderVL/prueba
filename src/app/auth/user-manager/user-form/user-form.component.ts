import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  @Input() user: User = new User();
  @Output() openEventEmitter = new EventEmitter<void>();
  @Output() newUserEventEmitter = new EventEmitter<User>();

  constructor() { 
    this.user = new User();
  }
  onSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      this.newUserEventEmitter.emit(this.user);
      console.log(this.user);
    }
    userForm.resetForm();
  }

  onClear(userForm: NgForm): void {
    this.user = new User();
    userForm.resetForm();
  }

  onOpenClose(): void {
    this.openEventEmitter.emit();
  }
}
