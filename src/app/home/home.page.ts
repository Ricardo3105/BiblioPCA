import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valorCompra: any;
  valorInversion: any;


  constructor( public NC:NavController) {}

  ngOnInit() {    

  }

  enviarValorCompra() {
    //Obtener de txt
    var VC=parseInt(this.valorCompra);

    this.NC.navigateForward('/pagina1/' + VC);

    this.valorCompra='';

  }
  enviarValorInversion() {

    var VT=0;
    var VIM=0;
    var VI=parseInt(this.valorInversion);

    for (let cont = 0; cont < 12; cont++) {
      VIM=VI*0.02
      VT= VI+VIM;
    }
    this.NC.navigateForward('/pagina2/' + VT);

    this.valorInversion='';
  }
}
