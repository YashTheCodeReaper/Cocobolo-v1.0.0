import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isExpanded: boolean = false;

  @ViewChild('sidebar') sidebarEl!: ElementRef

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleSidebarExpansion(){
    // if(!this.isExpanded){
    //   this.renderer.setStyle(this.sidebarEl.nativeElement, 'width', '20rem')
    // }else{
    //   this.renderer.setStyle(this.sidebarEl.nativeElement, 'width', '6rem')
    // }
    // this.isExpanded = !this.isExpanded;
  }

}
