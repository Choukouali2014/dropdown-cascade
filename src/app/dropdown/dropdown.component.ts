
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { SelectionService } from './../selection.service';


export interface Option {
  id: string;
  name: string;
  entityOption: string;
  parentid: string;

}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() selectOptions: Option[] = [];
  @Input() selectedList: string[] = [];
  @Input() label: string;
  @Input() parentId: string;
  @Input() name: string;
  @Input() prev=null;
  @Output() selectedValue: EventEmitter<string> = new EventEmitter();
  labels: string;
  select2: string;
  selected: any[];
  previosSel = null;
  constructor(private servc: SelectionService) { }
  ngOnInit() {
  }

  handleSelect(selected) {
      if( !!selected){
        
        if (!this.previosSel) {
          this.selectedList = [...this.selectedList, selected];
          
        } else {
          this.selectedList = [...this.selectedList.filter(s => s !== this.previosSel), selected];
        }
        this.previosSel = String(selected);
        this.selected = this.servc.getValue(selected);
        //this.selected = this.selectOptions.find(o => o.id === selected);
        console.log('the selected value is : ', this.selected);
        this.prev = [...this.selected];
        console.log('the prev is: ', this.prev);
        if (!!this.selected) {
          console.log("the select list is : ", this.servc.getEntity(selected));
          this.labels = this.servc.getEntity(selected);
          this.name = 'this.selected.id';
        }
      } else {
        this.selected = [];
        this.selectedList = [...this.selectedList];
      }

      
    
  }

}
