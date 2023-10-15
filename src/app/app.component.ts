import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teacher-helper';
  numOfGrades: number = 0;
  grades: number[] = [];
  isTableGenerated: boolean = false;
  avgGrade: number;

  onGenerateTable() {
    for (let i=0; i<this.numOfGrades; i++) {
      this.grades.push(0);
    }
  }

  onCalculate(form: NgForm){
    this.grades = Object.values(form.value);
    let sum = this.grades.reduce((acc, grade) => acc += grade);
    this.avgGrade = sum/this.grades.length;
    console.log(this.grades);
  }

  protected readonly Array = Array;
}
