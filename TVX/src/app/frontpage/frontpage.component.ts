import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  @Output() snowflakes: any = Array(50)
  @Output() viewIndex: number = 0
  @Output() views: any = [
    {
      image: 'xmas (1)',
      title: 'Ho ho ho, gefeliciteerd Danique!',
      description:
      ` Met heel veel kunde heb jij de eerste opdracht voltooid.
        Iemand met een slechte woordenschat? Die kon dat nooit!
        Nu is die eerste opdracht wel heel erg soepel gegaan.
        Maar... Natuurlijk heb ik er nog een paar klaar voor je staan.
      `
    },
    {
      image: 'xmas (2)',
      title: 'Opdracht 1 - Zoeken in alle hoeken',
      description:
      ` Met heel veel kunde heb jij de eerste opdracht voltooid.
        Iemand met een slechte woordenschat? Die kon dat nooit!
        Nu is die eerste opdracht wel heel erg soepel gegaan.
        Maar... Natuurlijk heb ik er nog een paar klaar voor je staan.
      `
    },
    {
      image: 'xmas (3)',
      title: 'Opdracht 2 - Ra, Ra, Raadsel!',
      description:
      ` Met heel veel kunde heb jij de eerste opdracht voltooid.
        Iemand met een slechte woordenschat? Die kon dat nooit!
        Nu is die eerste opdracht wel heel erg soepel gegaan.
        Maar... Natuurlijk heb ik er nog een paar klaar voor je staan.
      `
    }
  ]

  constructor() {
    // let audio = new Audio('audio_file.mp3');
    // audio.play();
  }

  changePage(byAmount: number): void {
    this.viewIndex += byAmount
  }

  ngOnInit(): void {
  }

}
