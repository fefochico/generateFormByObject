import { Component } from '@angular/core';
import { ControlWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-string',
  standalone: false,
  templateUrl: './string.component.html',
  styleUrl: './string.component.scss'
})
export class StringComponent extends ControlWidget{
  constructor() {
    super();
  }
}
