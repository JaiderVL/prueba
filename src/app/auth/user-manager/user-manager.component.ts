import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-manager',
  standalone: true,
  imports: [UserComponent, UserFormComponent,CommonModule],
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  users: User[] = [];
  userSelected: User = new User();
  open: boolean = false;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);
  }

  addUser(user: User): void {
    if (user.id > 0) {
      this.users = this.users.map(u => u.id === user.id ? { ...user } : u);
    } else {
      this.users = [...this.users, { ...user, id: new Date().getTime() }];
    }
    Swal.fire({
      title: "Guardado!",
      text: "Usuario guardado con éxito!",
      icon: "success"
    });
    this.userSelected = new User();
    this.setOpen();
  }

  removeUser(id: number): void {
    Swal.fire({
      title: "Seguro que quiere eliminar?",
      text: "Cuidado el usuario será eliminado del sistema!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(user => user.id !== id);
        Swal.fire({
          title: "Eliminado!",
          text: "Usuario eliminado con éxito.",
          icon: "success"
        });
      }
    });
  }

  setSelectedUser(userRow: User): void {
    this.userSelected = { ...userRow };
    this.open = true;
  }

  setOpen(): void {
    this.open = !this.open;
  }
}
