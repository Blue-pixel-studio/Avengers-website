import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}



  public onClick(elementId: string):void {
    
    // this.viewportScroller.scrollToAnchor(elementId);

    let el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: "smooth"});

    console.log('hi')

  }
  ngOnInit(): void {
  }



}
