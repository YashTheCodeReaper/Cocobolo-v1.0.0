import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isExpanded: boolean = true;

  @ViewChild('sidebar') sidebarEl!: ElementRef;
  @ViewChild('expanderIcon') expanderIconEl!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleSidebarExpansion(){
    if(!this.isExpanded){
      this.renderer.setStyle(this.sidebarEl.nativeElement, 'width', '20rem');
      this.renderer.setStyle(this.expanderIconEl.nativeElement, 'transform', 'rotate(-180deg)');
    }else{
      this.renderer.setStyle(this.sidebarEl.nativeElement, 'width', '8rem');
      this.renderer.setStyle(this.expanderIconEl.nativeElement, 'transform', 'rotate(0deg)');
    }
    this.isExpanded = !this.isExpanded;
  }

}
