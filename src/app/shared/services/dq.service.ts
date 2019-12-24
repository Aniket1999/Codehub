import { Injectable, NgZone } from '@angular/core';
import { Question } from "../services/question";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
declare var require: any;
@Injectable({
  providedIn: 'root'
})

export class DqService {

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    

  }

  AddQuestion(title, question, language, solution, created){

    let dateFormat = require('dateformat');
    const id = this.afs.createId();
    const quesRef: AngularFirestoreDocument<any> = this.afs.doc(`dq/`+id);
    //('dq/'+uids+'/'+id);
    const quesData: Question = {
      title: title,
      question: question,
      language: language,
      solution: solution,
      created: dateFormat(Date(), "dS mmm yyyy"),
      sno: null
    };
    return quesRef.set(quesData, {
      merge: true
    })
  }

  AddQuestionToUser(title, question, language, solution, created, uids){

    let dateFormat = require('dateformat');
    const id = this.afs.createId();
    const quesRef: AngularFirestoreDocument<any> = this.afs.doc(`users/`+uids+ '/questions/' +id);
    //('dq/'+uids+'/'+id);
    const quesData: Question = {
      title: title,
      question: question,
      language: language,
      solution: solution,
      created: dateFormat(Date(), "dS mmm yyyy"),
      sno:  null
    };
    return quesRef.set(quesData, {
      merge: true
    })
  }

}