import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avengers Fitness Studio';

  isActive: number = 0;

  constructor(private viewportScroller: ViewportScroller) {}



  public onClick(elementId: string, value:number):void {
    
    // this.viewportScroller.scrollToAnchor(elementId);

    console.log(value)
    switch(value){

      case 0:
        this.isActive = 0;
        break;

      case 1:
        this.isActive = 1;
        break;
       
      case 2:
        this.isActive = 2;
        break;
        
      default:
        this.isActive =0;
        break;
    }
    let el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: "smooth"})

  }
}
