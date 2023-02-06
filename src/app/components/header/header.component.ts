import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(){
  }

  setFontSize(index){
    const elm = document.querySelector<HTMLElement>('.pesquisar-filme-content');

    switch(index){
      case 0:
        elm.style.fontSize = '1rem';
        break;
      case 1:
        elm.style.fontSize = '1.35rem';
        break;
      case 2:
        elm.style.fontSize = '1.85rem';
        break;
    }
  }

  onButtonGroupClick($event){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }

}
