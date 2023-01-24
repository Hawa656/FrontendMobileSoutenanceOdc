import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../providers/fruits-service';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {
  private fruits: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fruitsService: FruitsService) { }

    
    ionViewDidLoad() {
      this.fruitsService.getFruits().subscribe(fruits => {
        this.fruits = fruits;
      })
    }

  ngOnInit() {
  }

}
