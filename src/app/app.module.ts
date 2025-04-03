import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DefaultWidgetRegistry, SchemaFormModule, WidgetRegistry } from 'ngx-schema-form';
import { PasswordComponent } from './widgets/password/password.component';
import { FormWidgetRegistry } from './widgets/formWidgetRegistry';
import { ReactiveFormsModule } from '@angular/forms';
import { StringComponent } from './widgets/string/string.component';

@NgModule({
  declarations: [AppComponent, PasswordComponent, StringComponent], // Si usas standalone, esto no es necesario
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]), // Configurar rutas
    SchemaFormModule.forRoot() // Configurar el módulo con forRoot()
  ],
  providers: [
    {provide: WidgetRegistry, useClass: FormWidgetRegistry}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
