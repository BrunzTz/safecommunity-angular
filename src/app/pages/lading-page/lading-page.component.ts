import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lading-page',
  templateUrl: './lading-page.component.html',
  styleUrls: ['./lading-page.component.scss']
})
export class LadingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // mybutton = document.getElementById("topBtn");

  // // Quando o usuário rolar para baixo 20px do topo, mostre o botão
  // window.onscroll = function () {
  //   scrollFunction()
  // };

  // scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }

  // // Quando o usuário clicar no botão, role para o topo 
  // topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

}
