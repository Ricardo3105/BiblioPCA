import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  VT: any;

  constructor(public NC:NavController, public AR:ActivatedRoute) { }

  ngOnInit() {


    let valorInversion=this.AR.snapshot.paramMap.get('valorInversion');
    this.VT=valorInversion;

    
  }

  irPaginaHome() {

    this.NC.navigateForward("/home");

  }

}
