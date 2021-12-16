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
      image: 'xmas (1).svg',
      title: 'Ho ho ho, gefeliciteerd Danique!',
      description:
      ` Met heel veel kunde heb jij de eerste opdracht voltooid.
        Iemand met een slechte woordenschat? Die kon dat nooit!
        Nu is die eerste opdracht wel heel erg soepel gegaan.
        Maar... Natuurlijk heb ik er nog een paar klaar voor je staan.`,
      finished: true
    },
    {
      image: 'xmas (2).svg',
      title: 'Opdracht - Zoeken in alle hoeken',
      description:
      ` Als het goed is liggen in de doos voor je niet alleen roze letters.
        Vorm samen met de gele letters en de letters hieronder een zin.
        Bestaat je antwoord uit 3 woorden? Vul deze dan in.
        `,
      answer: 'tijd voor kerst',
      finished: false
    },
    {
      image: 'xmas (6).svg',
      title: 'Opdracht - Ra, Ra, Raadsel!',
      description:
      ` Ho, ho, ho, wat ben jij snel!
        Een raadsel kan jij vast ook wel.

        Het maakt geluid en blauw is de kleur,
        Als je het hebt krijg je veel gezeur.
        Gooi het nou weg en vermijd het gevaar,
        Van het monster dat is bedekt met haar.
      `,
      answer: 'dagobert',
      finished: false
    },
    {
      image: 'code.png',
      title: 'Opdracht - console.log("kerstman")',
      description:
      ` Ga zo door en de kerstman staat in de min,
        Nu een wat lastigere, zit die code er nog in?
        Hopelijk ben je niet alles vergeten,
        Cowclicker zit in het korte verleden.
        Wat staat er na deze code in de console?
        Op je antwoord doe ik een strenge controle!
      `,
      answer: 'De kerstman is dit jaar 319 euro armer...',
      finished: false
    },
    {
      image: 'xmas (10).svg',
      title: 'Opdracht - Pittige vragen',
      description:
      ` Je bent erg ver en het einde is zo.
        De pijl onderin is nu een cadeau.
        Deze is moeilijk, je raadt 'm nooit,
        Wie is het leukste vriendje ooit?

        ( PS: Ik niet hoor, vraag maar aan de kerstvrouw ;) )
      `,
      answer: 'Ajob',
      finished: false
    }
  ]

  constructor() {
    // let audio = new Audio('audio_file.mp3');
    // audio.play();

    // TODO: Remove this
    this.views = this.views.map((i: any) => {
      i.description = i.description.split('\n').join('<br />')
      i.finished = true

      return i
    })
  }

  changePage(byAmount: number): void {
    if (this.viewIndex + byAmount < this.views.length)
      this.viewIndex += byAmount
  }

  submitAnswer(event: any) {
    let { value } = event.target
    let errorClass = 'error'

    if (value.toLowerCase() === this.views[this.viewIndex].answer.toLowerCase()) {
      this.views[this.viewIndex].finished = true
    } else if ([...event.target.classList].indexOf(errorClass) == -1) {
      event.target.classList.add(errorClass)

      setTimeout(() => {
        event.target.classList.remove(errorClass)
      }, 500)
    }

  }

  ngOnInit(): void {
  }

}
