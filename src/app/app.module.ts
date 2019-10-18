import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { DropDownContainerComponent } from './drop-down-container/drop-down-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    DropDownContainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    AppRoutingModule,
    FormlyModule.forRoot({
      types: [
        { name: 'selectx', component: DropDownContainerComponent },
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
