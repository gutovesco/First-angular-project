import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'Titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.less']
})
export class TitlesComponent implements OnInit {

  @Input() title: any;
  @ViewChild('trailer', {static: false}) trailer: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(){
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.play();
  }

  stopVideo(){
    this.trailer.nativeElement.pause();
  }

}
