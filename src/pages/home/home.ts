import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public novaMsg: string;
  public varBoasvindas: string;
  
  constructor(public navCtrl: NavController) {
   
  }
  ionViewDidLoad(){
    this.varBoasvindas = 'Bem vindo aos nosso cursos compactos!'
  }

  altVar(){
    this.varBoasvindas = 'Olá '+ this.novaMsg
  }

  irPag2(){
    this.navCtrl.push(Pagina2Page)
  }
  
}
