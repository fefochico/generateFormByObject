import { Component } from '@angular/core';
import { ControlWidget, StringWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-password',
  standalone: false,
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent extends ControlWidget {
  constructor() {
    super();
  }
}
