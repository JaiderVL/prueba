import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';

@Component({
  selector: 'user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() users: User[] = [];
  
  @Output() idUserEventEmitter = new EventEmitter<number>();
  @Output() selectedUserEventEmitter = new EventEmitter<User>();

  onRemoveUser(id: number): void {
    this.idUserEventEmitter.emit(id);
  }

  onSelectedUser(user: User): void {
    this.selectedUserEventEmitter.emit(user);
  }

  trackById(index: number, user: User): number {
    return user.id;
  }
}
