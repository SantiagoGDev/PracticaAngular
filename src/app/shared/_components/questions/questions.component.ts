import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from '../../_models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }


  questions:Question [] = [] ;

  constructor(private _questionsService:QuestionsService) { }

  ngOnInit(): void {
    this.questions = this._questionsService.getQuestions();
  }


}
