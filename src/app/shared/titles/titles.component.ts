import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.less']
})
export class TitlesComponent implements OnInit {

  @Input() title: any

  constructor() { }

  ngOnInit(): void {
  }

}
