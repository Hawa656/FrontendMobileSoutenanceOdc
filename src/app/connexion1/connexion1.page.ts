import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion1',
  templateUrl: './connexion1.page.html',
  styleUrls: ['./connexion1.page.scss'],
})
export class Connexion1Page implements OnInit {
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  constructor() { }

  ngOnInit() {
  }

}
