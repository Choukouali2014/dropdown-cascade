import { FieldType } from '@ngx-formly/core';
import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../dropdown/dropdown.component';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-drop-down-container',
  templateUrl: './drop-down-container.component.html',
  styleUrls: ['./drop-down-container.component.scss']
})
export class DropDownContainerComponent extends FieldType implements OnInit {

  opts = [];
   label: string;
   name: string;
  constructor(private selectionService: SelectionService) {
    super();
  }
  

  ngOnInit() {
    this.label = this.field.templateOptions.label;
    this.name = ' major';
    if(!this.model[this.field.key]) {
      this.model[this.field.key] = this.field;
      this.opts = this.model[this.field.key].templateOptions.options;
      console.log('the model is ', this.model);
    }

   
  }

  

}
