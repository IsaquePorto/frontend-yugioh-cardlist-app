import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chegou(){
    console.log("Chegou")
    var element = document.getElementById("myID");
    element!.style.boxShadow = "inset 7px 30px 30px black";
  }

  saiu(){
    console.log("Saiu")
    var element = document.getElementById("myID");
    element!.style.boxShadow = "none";
  }

}
