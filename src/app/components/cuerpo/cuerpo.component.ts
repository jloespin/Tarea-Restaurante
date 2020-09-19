import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comensal } from 'src/app/models/comensal.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
@ViewChild('ncomensal') ncomensal:ElementRef;//ncomensal q es el identificador q esta en la template hmtl
@ViewChild('ccomensal') ccomensal:ElementRef;//donde los ElementsRef se añaden automaticamente
//para la interface Comensal
comensales: Comensal[]=[];

  constructor() { }

  ngOnInit(): void {
  }

agregar(nombre:String,ciudad:String){
  //console.log(nombre);
  //console.log(ciudad);

  const objcomensalAgregar: Comensal ={nombre,ciudad} //estos parametros de la cadena dene ir igual en los del metodo "agregar"
  this.comensales.push(objcomensalAgregar);
  console.log(this.comensales);
  this.ncomensal.nativeElement.value=''; //para limpiar la caja dee texto del nombre
  this.ccomensal.nativeElement.value=''; //para limpiar la caja dee texto de la ciudad

  }
// fin

}
