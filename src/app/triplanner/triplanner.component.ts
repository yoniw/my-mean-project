import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triplanner',
  templateUrl: './triplanner.component.html',
  styleUrls: ['./triplanner.component.css']
})
export class TriplannerComponent implements OnInit {

  budgetOptions = ["1000$", "2000$", "5000$", "10,000$"]
  selectedBudget 

  constructor() { }

  ngOnInit() {
  }

}
