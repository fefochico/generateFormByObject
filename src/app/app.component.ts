import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArrayProperty, FormProperty, ISchema, PropertyGroup, Validator } from 'ngx-schema-form';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('sf', { static: false }) sfForm!: any;
  public value: any = null;

  public mySchema: ISchema = {
    properties: {
      email: {
        type: "string",
        description: "Email",
        format: "email",
        widget: { id: "my-custom-string" },
      },
      password: {
        type: "string",
        description: "Password",
        widget: { id: "my-custom-password" },
      },
      passwordCheck: {
        type: "string",
        description: "Password (verification)",
        widget: { id: "my-custom-password" },
        expectedValue: ''
      },
    },
    required: ["email", "password", "passwordCheck"],
  };

  public myValidators: { [path: string]: Validator } = {
    "/passwordCheck": (value: any, formProperty: FormProperty, form: PropertyGroup) => {
      const passwordValue = form.getProperty("password")?.value;
      if (value !== passwordValue) {
        return [{ passwordCheck: { expectedValue: "same as 'password'" } }]; // ✅ SIN la barra "/"
      }
      return [{ passwordCheck: {}}]; // ✅ SIN la barra "/"
    },
  };

  onContinue(){
    if (this.sfForm) {
      this.sfForm.ngSubmit(); // Ejecuta la validación del formulario
      console.log(this.sfForm.form.errors); // Muestra los errores en la consola
      window.alert('¡Esto es una alerta!');
    }
  }
}
