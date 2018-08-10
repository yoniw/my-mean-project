import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-triplanner',
  templateUrl: './triplanner.component.html',
  styleUrls: ['./triplanner.component.css']
})
export class TriplannerComponent implements OnInit {

  public budgetOptions = ["1000$", "2000$", "5000$", "10,000$"];
  public selectedBudget: string;

  constructor(private api: BudgetService) { }

  ngOnInit() {
    this.selectedBudget = "1000$";
  }

  onBudgetSubmit() {
    console.log('selected budget: ' + this.selectedBudget);
    this.api.postSelectedBudget(this.selectedBudget)
      .subscribe(res => {
          console.log('response from service: ' + res);
        }, (err) => {
          console.log(err);
        });
  }

}
