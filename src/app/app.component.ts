import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';




  constructor(private viewportScroller: ViewportScroller) {}



  public onClick(elementId: string):void {
    
    // this.viewportScroller.scrollToAnchor(elementId);

    let el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: "smooth"})

  }
}
