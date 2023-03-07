import { Component } from '@angular/core';
import { ValorantApiService } from 'src/app/service/valorant-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  public getAllCharacters: any;
  public CharactersByPage: any;

  constructor(
    private ValorantApiService: ValorantApiService
  ){}

  getCharactersByPage() {
    page: Number;
  }

  ngOnInit(): void {
    this.ValorantApiService.apiListAllCharacters.subscribe(
      res => {
        this.getAllCharacters = res.data;
        console.log(this.getAllCharacters);
        this.CharactersByPage = this.getAllCharacters.slice(0,3)
        console.log(this.CharactersByPage)
      }
    );
  }
}
