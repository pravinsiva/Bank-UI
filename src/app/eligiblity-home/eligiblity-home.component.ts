import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligiblity-home',
  templateUrl: './eligiblity-home.component.html',
  styleUrls: ['./eligiblity-home.component.scss']
})
export class EligiblityHomeComponent implements OnInit {
  monthlyIncome: number =100000
  monthlyExpense: number = 10000
  months: number[] = [6, 12, 24, 36,48, 60]
  tenure: number = 6
  isCheckedExisting: boolean
  exitLoanAmount: number
  loanAmount: number
  emiAmount:  number
  constructor() { }

  ngOnInit(): void {
    this.checkEMI()
  }
  checkEMI(){
    let finalAmt: number = Number(this.monthlyIncome) - Number(this.monthlyExpense) - (this.exitLoanAmount > 0 ? this.exitLoanAmount : 0)
    finalAmt = finalAmt/2
    finalAmt = finalAmt * this.tenure
    const monthlyInterest = (finalAmt * (12 * 0.01)) / this.tenure;
    this.loanAmount = finalAmt - (monthlyInterest * this.tenure);
    this.emiAmount = ((this.loanAmount / this.tenure) + monthlyInterest);

  }


}
