import { Injectable } from "@angular/core";
import { DefaultWidgetRegistry } from "ngx-schema-form";
import { PasswordComponent } from "./password/password.component";
import { StringComponent } from "./string/string.component";

@Injectable()
export class FormWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();
    this.register('my-custom-string', StringComponent);
    this.register('my-custom-password', PasswordComponent);
  }

}