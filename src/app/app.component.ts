import { Component } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rick&Morty';

  characters: any[];
  currentPage: number;
  numPages: number;

  constructor(private charactersServices: CharactersService) {
    this.currentPage = 1;
  }

  async ngOnInit() {
    this.charactersServices.getAll()
    .then(response => {
      this.characters = response['results'];
      this.numPages = response['info']['pages'];
    })
  }

  async onClick(siguiente) {
    if(siguiente) {
      this.currentPage ++;
    } else {
      this.currentPage --;
    }
   const response = await this.charactersServices.getAll(this.currentPage);
   this.characters = response['results'];
  }
}
