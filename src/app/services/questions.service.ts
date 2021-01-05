import { Injectable } from '@angular/core';
import { DATA_QUESTIONS } from '../shared/_constants/questions.constant';
import { Question } from '../shared/_models/question.model';
@Injectable()
export class QuestionsService{
   
    constructor (){}

    private questions:Question [] = DATA_QUESTIONS;
    
    getQuestions(){
        return this.questions;
    }
}
