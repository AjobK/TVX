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
        Maar... Natuurlijk heb ik er nog een paar klaar voor je staan.`,
      finished: true
    },
    {
      image: 'xmas (2)',
      title: 'Opdracht - Zoeken in alle hoeken',
      description:
      ` Als het goed is liggen in de doos voor je niet alleen roze letters.
        Vorm samen met de gele letters en de letters hieronder een zin.
        Bestaat je antwoord uit 3 woorden? Vul deze dan in.
        `,
      context: {
        letters: ['J', 'K', 'T', 'V', 'O', 'D', 'R']
      },
      answer: 'tijd voor kerst',
      finished: false
    },
    {
      image: 'xmas (3)',
      title: 'Opdracht - Ra, Ra, Raadsel!',
      description:
      ` Met heel veel kunde heb jij de eerste opdracht voltooid.
        Iemand met een slechte woordenschat? Die kon dat nooit!
        Nu is die eerste opdracht wel heel erg soepel gegaan.
        Maar... Natuurlijk heb ik er nog een paar klaar voor je staan.`,
      finished: false
    }
  ]

  constructor() {
    // let audio = new Audio('audio_file.mp3');
    // audio.play();

    // TODO: Remove this
    // this.views = this.views.map((i: any) => {
    //   i.description = i.description.split('\n').join('<br />')
    //   i.finished = true

    //   return i
    // })
  }

  changePage(byAmount: number): void {
    if (this.viewIndex + byAmount < this.views.length)
      this.viewIndex += byAmount
    else
      console.log('Nope')
  }

  submitAnswer(event: any) {
    let { value } = event.target

    if (value.toLowerCase() === this.views[this.viewIndex].answer)
      this.views[this.viewIndex].finished = true
  }

  ngOnInit(): void {
  }

}
