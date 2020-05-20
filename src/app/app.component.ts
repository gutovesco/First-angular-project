import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'My-app';

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
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 2',
      relevance: 99,
      age: 16,
      parts: 2,
      categories: ['Épico', 'Fantasia', 'Viagem no espaço']
    },{
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 3',
      relevance: 100,
      age: 18,
      parts: 1,
      categories: ['Épico', 'Fantasia', 'Viagem no espaço']
    },]
}
