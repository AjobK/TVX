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
        Bestaat je antwoord uit 3 woorden? Vul deze dan in!
      `,
      answer: 'Tijd voor kerst',
      context: {
        letters: [ 'J', 'O', 'K', 'V', 'R', 'T' ]
      },
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
      answer: 'Dagobert',
      finished: false
    },
    {
      image: 'hans.png',
      title: 'Opdracht - Hans maakt geen kans',
      description:
      ` Samen met je vrienden ga je op weg.
        Helaas hebben jullie in Miitopia pech!
        Hans heeft alle gezichten verborgen,
        Maar Daniel de chef die maakt zich geen zorgen.
        De dappere chef die heeft spontaan een idee,
        Hij valt Hans aan en die aanval heet ...?
      `,
      answer: 'Flambe',
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

        ( Behalve de kerstman natuurlijk 😉 )
      `,
      answer: 'Ajob',
      finished: false
    },
    {
      image: 'cadeau.png',
      title: '🎁 Surprise! 🎁',
      description:
      ` De kerstman heeft zijn best gedaan,
        Maar inmiddels moet hij verder gaan.
        Geniet van je welverdiende cadeau,
        Woorden, puzzels, je doet het zo!

        Kijk eens achter het grote scherm...
      `,
      finished: true
    }
  ]
  @Output() isChangingPage: boolean = false

  ambienceAudio: HTMLAudioElement = new Audio()
  sfxAudio: HTMLAudioElement = new Audio()

  constructor() {
    this.sfxAudio.volume = 0.4

    console.log('%cHo ho ho!\n\nNiet vals spelen hè! 😉', 'color:red; font-size: 36px;');

    this.startAmbienceAudio()

    this.views = this.views.map((i: any) => {
      i.description = i.description.split('\n').join('<br />')

      i.finished = true

      return i
    })
  }

  startAmbienceAudio = () => {
    this.ambienceAudio.volume = 0.2
    this.ambienceAudio.loop = true
    this.ambienceAudio.autoplay = true
    this.ambienceAudio.src = '../../assets/audio/ambient.mp3'
    this.ambienceAudio.play()

    window.removeEventListener('mousemove', this.startAmbienceAudio)
  }

  playSFX = (filename: string) => {
    this.sfxAudio.src = `../../assets/audio/${ filename }.mp3`
    this.sfxAudio.play()
  }

  setEndBackground(isAtEnd: boolean) {
    if (isAtEnd)
      document.body.style.backgroundImage = 'url(\'https://media4.giphy.com/media/h8ISB2nUVITEWjVgGo/200.gif\')'
    else
      document.body.style.backgroundImage = ''
  }

  changePage(byAmount: number): void {
    if (this.viewIndex + byAmount < this.views.length) {
      this.isChangingPage = true

      if (this.viewIndex + byAmount >= this.views.length-1) {
        this.ambienceAudio.src = '../../assets/audio/bubblegum_kk.mp3'
        this.ambienceAudio.play()
      } else if (!this.ambienceAudio.src.endsWith('ambient.mp3')) {
        this.ambienceAudio.src = '../../assets/audio/ambient.mp3'
        this.ambienceAudio.play()
      }

      setTimeout(() => {
        this.viewIndex += byAmount
        this.isChangingPage = false
        this.setEndBackground(!!(this.viewIndex >= this.views.length - 1))
      }, 1000)
    }
  }

  submitAnswer(event: any) {
    let { value } = event.target
    let errorClass = 'error'

    if (value.toLowerCase() === this.views[this.viewIndex].answer.toLowerCase()) {
      this.views[this.viewIndex].finished = true
      this.playSFX('correct')
    } else if ([...event.target.classList].indexOf(errorClass) == -1) {
      event.target.classList.add(errorClass)
      this.playSFX('incorrect')

      setTimeout(() => {
        event.target.classList.remove(errorClass)
      }, 500)
    }

  }

  ngOnInit(): void {
  }

}
