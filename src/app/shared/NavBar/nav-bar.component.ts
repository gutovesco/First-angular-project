import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'NavBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})

export class NavBarComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void{
    console.log('method not implemented')
  }
}