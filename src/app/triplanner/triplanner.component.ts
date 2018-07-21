import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triplanner',
  templateUrl: './triplanner.component.html',
  styleUrls: ['./triplanner.component.css']
})
export class TriplannerComponent implements OnInit {

  public budgetOptions = ["1000$", "2000$", "5000$", "10,000$"];
  public selectedBudget: string;

  constructor() { }

  ngOnInit() {
    this.selectedBudget = "1000$";
  }

}
