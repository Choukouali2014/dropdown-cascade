import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  public selected: BehaviorSubject<string[]> = new BehaviorSubject([]);
  constructor() { }


  player =
    [
      {
        id: "d45d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Pending",
        entityOption: "Sub Major",
        parentid: 111111000000000000
      },
      {
        id: "d65d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Service Requested",
        entityOption: "Sub Major",
        parentid: 111111000000000000
      },
      {
        id: "d85d94e8-ace3-e811-a954-000d3a1f7249",
        name: "No Request for XX",
        entityOption: "Sub Major",
        parentid: 111111000000000000
      },
      {
        id: "da5d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Relief DF",
        entityOption: "Sub Major",
        parentid: 111111000000000000,
        "order": 2
      },
      {
        id: "dc5d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Withdrawn-XXSDS",
        entityOption: "Sub Major",
        parentid: 222222000000000000
      },
      {
        id: "de5d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Relief Denied",
        entityOption: "Sub Major",
        parentid: 222222000000000000
      },
      {
        id: "e05d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Dismissed-Lack ",
        entityOption: "Sub Major",
        parentid: 222222000000000000
      },
      {
        id: "e45d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Withdraw",
        entityOption: "Sub Major",
        parentid: 222222000000000000
      },
      {
        id: "e65d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Settled before XXXX",
        entityOption: "SubB Major",
        parentid: "d65d94e8-ace3-e811-a954-000d3a1f7249"
      },
      {
        id: "e85d94e8-ace3-e811-a954-000d3a1f7249",
        name: " Closed Case",
        entityOption: "SubB Major",
        parentid: "d65d94e8-ace3-e811-a954-000d3a1f7250"
      },
      {
        id: "ea5d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Party Withdrew from XXXX",
        entityOption: "SubB Major",
        parentid: "d65d94e8-ace3-e811-a954-000d3a1f7251"
      },
      {
        id: "ec5d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Parties could XXXXXXx",
        entityOption: "SubB Major",
        parentid: "d65d94e8-ace3-e811-a954-000d3a1f7252"
      },
      {
        id: "ee5d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Resolved",
        entityOption: "SubB Major",
        parentid: "d65d94e8-ace3-e811-a954-000d3a1f7253"
      },
      {
        id: "f05d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Party Declined",
        entityOption: "SubB Major",
        parentid: "d65d94e8-ace3-e811-a954-000d3a1f7254"

      },
      {
        id: "f25d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Party Did Not Respond",
        entityOption: "SubB Major",
        parentid: "d65d94e8-ace3-e811-a954-000d3a1f7255"
      },
      {
        id: "f45d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Client handling XXXXX",
        entityOption: "SubB Major",
        parentid: "d85d94e8-ace3-e811-a954-000d3a1f7249"
      },
      {
        id: "f65d94e8-ace3-e811-a954-000d3a1f7249",
        name: "Referred To",
        entityOption: "SubB Major",
        parentid: "d85d94e8-ace3-e811-a954-000d3a1f7249"
      },
      {
        id: "925a6297-7c51-e911-a962-000d3a1f7249",
        name: "Not Resolved",
        entityOption: "SubB Major",
        parentid: "de5d94e8-ace3-e811-a954-000d3a1f7249",

      },
      {
        id: "945a6297-7c51-e911-a962-000d3a1f7249",
        name: "Staff Refused",
        entityOption: "SubB Major",
        parentid: "e45d94e8-ace3-e811-a954-000d3a1f7249"
      },
      {
        id: "9b35322b-4965-e911-a962-000d3a1f7ca4",
        name: "Settled outside of XXXX",
        entityOption: "SubB Major",
        parentid: "e05d94e8-ace3-e811-a954-000d3a1f7249"

      },
      {
        id: "111111000000000000",
        name: "Sub Major group 1",
        entityOption: "Major",
        parentid: ""
      },
      {
        id: "222222000000000000",
        name: "Sub Major group 2",
        entityOption: "Major",
        parentid: ""
      }
    ];

    

  putSelected(sel: string) {
    const curr = this.selected.getValue();
    this.selected.next([...curr, sel]);
  }

  


  getValue(value?) {
    let parent = [];
    for (let i = 0; i < this.player.length; i++) {
      if (!!value) {
        if (this.player[i].parentid == value) {
          parent.push(this.player[i]);
        }
      } else {
        if (!this.player[i].parentid) {
          parent.push(this.player[i]);
        }
      }
    }
    return parent;
  }
  getEntity( parentid)
  {
    let val =  this.player.find(o => o.parentid == parentid);
    if(!! val) {
      return val.entityOption;
    }
   
  }
}
