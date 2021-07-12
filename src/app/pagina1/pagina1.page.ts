import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  public vehiculos: any=["Duster","spark","Prado","Tucson","Aveo","Sportage","Volvo"];
  public descuento1: number=0;
  public descuento2: number=0;
  public numeroAzar: number=100; 
  VCT: any;
  public ValorDescuento: number=0;
  public ValorTotal: number=0;




  constructor(public NC:NavController, public AR:ActivatedRoute) { }

  ngOnInit() {
    
    //Logica Supermercado
    let valorCompra=this.AR.snapshot.paramMap.get('valorCompra');
    this.VCT=valorCompra;
    this.ValorDescuento=this.VCT*0.20;
    this.ValorTotal=this.VCT-this.ValorDescuento;

  }

  irPaginaHome() {
    this.NC.navigateForward("/home");
  }



}
