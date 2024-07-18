import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagerComponent } from './auth/user-manager/user-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cartografia';
}
