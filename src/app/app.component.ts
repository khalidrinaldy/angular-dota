import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { Hero } from 'src/model/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(public apiService: ApiService) {}
  activeAttr = "str"
  attrs = [
    "str",
    "agi",
    "int"
  ]
  heroes: any = []

  getHeroes() {
    return this.apiService.getHeroes().subscribe((res: {}) => {
      this.heroes = res;
      this.heroes.sort((a:Hero,b:Hero) => (a.localized_name > b.localized_name) ? 1 : ((a.localized_name < b.localized_name) ? -1 : 0));
      console.log(res);
    });
  }

  changeAttr(attr:string) {
    this.activeAttr = attr;
  }

  toImage(hero:Hero) {
    var str = hero.name.replace('npc_dota_hero_', '');
    return `http://cdn.dota2.com/apps/dota2/images/heroes/${str}_sb.png`
  }
}