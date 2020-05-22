import { OnInit, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'NavBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})

export class NavBarComponent implements OnInit{

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();
  @Input() opened = false

  constructor(){

  }

  ngOnInit(): void{
    console.log('method not implemented')
  }

  toggle(){
    this.opened = !this.opened
    this.menuToggle.emit(this.opened)
  }
}
