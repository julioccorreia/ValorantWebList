import { Component } from '@angular/core';
import { ValorantApiService } from 'src/app/service/valorant-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  public getAllCharacters: any;
  public charactersByPage: any;
  public actualPage: number = 1;
  public lastPage!: number;

  public charInitial: number = 0;
  public charFinal: number = 3;

  constructor(
    private ValorantApiService: ValorantApiService
  ){}

  previousPage() {
    if (this.actualPage > 1) {
      this.charInitial -= 3;
      this.charFinal -= 3;
      this.actualPage--
      this.getCharactersByPage(this.actualPage)
    }
  }

  nextPage() {
    if (this.actualPage < this.lastPage) {
      this.charInitial += 3;
      this.charFinal += 3;
      this.actualPage++
      this.getCharactersByPage(this.actualPage)
      console.log(this.charInitial)
    }
  }

  getCharactersByPage( page: number ) {
    this.charactersByPage = this.getAllCharacters.slice(this.charInitial, this.charFinal);

    return console.log(this.charactersByPage);
  }

  ngOnInit(): void {
    this.actualPage = 1;

    this.ValorantApiService.apiListAllCharacters.subscribe(
      res => {
        this.getAllCharacters = res.data;
        console.log(this.getAllCharacters);
        this.getCharactersByPage(this.actualPage);

        if(this.getAllCharacters.length % 3 == 0){
        this.lastPage = this.getAllCharacters.length / 3;
        } else {
          this.lastPage = Math.ceil(this.getAllCharacters.length / 3);
        }
      }
    );
  }

  closeDetails(){
    let details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }
}
