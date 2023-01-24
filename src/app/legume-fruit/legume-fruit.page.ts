import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legume-fruit',
  templateUrl: './legume-fruit.page.html',
  styleUrls: ['./legume-fruit.page.scss'],
})
export class LegumeFruitPage implements OnInit {
  valueSelected:any='Description'

  constructor() { }

  ngOnInit() {
  }
  
  segmentChanged(event:any){
    this.valueSelected = event.target.value;
  }

}
