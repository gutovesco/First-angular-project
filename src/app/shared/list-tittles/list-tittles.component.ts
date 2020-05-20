import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ListTittles',
  templateUrl: './list-tittles.component.html',
  styleUrls: ['./list-tittles.component.less']
})
export class ListTittlesComponent implements OnInit {

  @Input() title: String;
  @Input() list = [];


  constructor() { }

  ngOnInit(): void {
  }

}
