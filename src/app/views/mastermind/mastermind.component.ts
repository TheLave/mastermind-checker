import { Component } from '@angular/core';
import { Pin } from 'src/models/Pin';
import { Result } from 'src/models/enums/Result';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss'],
})
export class MastermindComponent {
  answer: Pin[] = [{}, {}, {}, {}];
  guess: Pin[] = [{}, {}, {}, {}];
  results: Result[] = [];
  attempts = 0;
  currentMenu = '';

  get canCheckInput() {
    let canCheck = true;

    for (let pin of this.answer) {
      if (pin.number === undefined) {
        canCheck = false;
        break;
      }
    }

    for (let pin of this.guess) {
      if (pin.number === undefined) {
        canCheck = false;
        break;
      }
    }

    return canCheck;
  }

  onNumberChange(index: number, array: string) {
    this.currentMenu = `${array}${index + 1}`;
  }

  resetAttempts() {
    this.attempts = 0;
  }

  resetPins() {
    this.answer.forEach((pin) => {
      pin.number = undefined;
    });

    this.guess.forEach((pin) => {
      pin.number = undefined;
    });
  }

  checkInput() {
    this.attempts++;
    this.results = [];

    let answerCopy = this.answer.slice();

    for (let i = answerCopy.length - 1; i >= 0; i--) {
      if (answerCopy[i].number === this.guess[i].number) {
        this.results.push(Result.CORRECT);
        answerCopy.splice(i, 1);
      }
    }

    for (let i = this.guess.length - 1; i >= 0; i--) {
      const first = answerCopy.find((pin) => {
        return pin.number === this.guess[i].number;
      });

      if (first) {
        this.results.push(Result.CONTAINS);
        answerCopy.splice(answerCopy.indexOf(first), 1);
      }
    }

    for (let i = 0; 4 - this.results.length; i++) {
      this.results.push(Result.ABSENT);
    }
  }
}
