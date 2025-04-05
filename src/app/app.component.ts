import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      },
    },
    required: ["email", "password", "passwordCheck"],
  };

  /*
  public myValidators: { [path: string]: Validator } = {
    "/passwordCheck": (value: any, property: FormProperty, form: PropertyGroup) => {
      const passwordValue = form.getProperty("password")?.value;
      if (value!= undefined && 
        value !== passwordValue) {
        return [{ passwordCheck: { expectedValue: "same as 'password'" } }];
      }
      return [{ passwordCheck: {}}];
    },
  };
*/

  myValidators:  { [path: string]: any } = {
    "/passwordCheck": (value: any, property: FormProperty, form: PropertyGroup)=> {
      const passwordProperty = form.getProperty("password");
      if (
        passwordProperty.value !== undefined &&
        property.valid &&
        value !== passwordProperty.value
      ) {
        return { passwordCheck: { expectedValue: "same as 'password'" } };
      }
      return null;
    },
  };

  onContinue(){
    if(JSON.stringify(this.value) !== JSON.stringify({}))
    alert(JSON.stringify(this.value));
  }
}
