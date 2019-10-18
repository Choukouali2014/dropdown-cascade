import { SelectionService } from './selection.service';
import { Option } from './dropdown/dropdown.component';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private servic: SelectionService){

  }
  title = 'cascade';
  value = '';
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = 
  [
    {
      key: 'name',
      type: 'selectx',
      templateOptions: {
        options: [...this.servic.getValue()],
        label: this.servic.getEntity(this.value),
        required: true,
      }
    },
  ];
  submit(model) {
    if(!!this.form.valid) {
      console.log(model);
    }
    
  }
}
