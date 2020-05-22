import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'My-app';

  menuOpened = false

  listTitles = [{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia',
    relevance: 98,
    age: 12,
    parts: 2,
    categories: ['Épico', 'Fantasia', 'Viagem no espaço']
  },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/the-rain.jpg',
      name: 'The Rain',
      relevance: 99,
      age: 16,
      parts: 2,
      categories: ['Drama', 'Suspense', 'Ação']
    },{
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/o-menino-que-descobriu-o-vento.jpg',
      name: 'O menino que descobriu o vento',
      relevance: 100,
      age: 18,
      parts: 1,
      categories: ['Drama', 'Suspense', 'Ação']
    },{
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/better-call-saul.jpg',
      name: 'Better Call Saul',
      relevance: 100,
      age: 18,
      parts: 1,
      categories: ['Comédia', 'Suspense', 'Ação']
    },]

    setMenuState(state: boolean){
      this.menuOpened = state;
    }

    closeMenu(){
      this.menuOpened = false;
    }
}
