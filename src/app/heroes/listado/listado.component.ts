import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['spiderman', 'iroman', 'hulk', 'thor'];
  heroeBorrado: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe() {
    console.log("Borrando...");
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
