import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from "../satellite";

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  typesArray: string[] = [];

  createTypesArray() {
    for (let i = 0; i < this.satellites.length; i++) {
      if (!this.typesArray.includes(this.satellites[i].type)) {
        this.typesArray.push(this.satellites[i].type);
      }
    } return this.typesArray;
  }


  ngOnInit() {
  }
  
  ngOnChanges() {
    if(this.satellites !== undefined) {
      this.createTypesArray();
    }
  }

  count(category: string): number {
    let counter: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (category.toLowerCase() === this.satellites[i].type.toLowerCase()){
        counter += 1;
      }
    } return counter;
  }
}
