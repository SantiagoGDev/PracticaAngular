import { Component, OnInit } from '@angular/core';
import {QuestionsService,Question} from './../../services/questions.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions:Question [] = [] ;

  constructor(private _questionsService:QuestionsService ) { }

  ngOnInit(): void {
    this.questions = this._questionsService.getQuestions();
  }

}
