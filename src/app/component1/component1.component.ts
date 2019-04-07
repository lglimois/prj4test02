import { Component, Input, OnInit } from '@angular/core';
import { Service01Service } from '../service01.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor( private service01Service: Service01Service ) { }

  ngOnInit() {
  }

  getLibelle(): string{
    return this.service01Service.getLibelle();
  }

  showStatusLibelle(): string{
    return this.service01Service.getLibelle();
  }

}
