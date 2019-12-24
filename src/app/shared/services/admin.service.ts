import { Injectable, NgZone } from '@angular/core';
import { Qod } from "../services/qod";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
declare var require: any;
@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    

  }

  AddQuestionToUser(title, question, language, solution, created){

    let dateFormat = require('dateformat');
    const id =title;
    const quesRef: AngularFirestoreDocument<any> = this.afs.doc(`admin/`+id);
    const quesData: Qod = {
      title: title,
      question: question,
      language: language,
      solution: solution,
      created: dateFormat(Date(), "dS mmm yyyy | h:MM TT"),
      sno:  null,
      status: 0
    };
    return quesRef.set(quesData, {
      merge: true
    })
  }

  UpdateQuestion(title){

    // const id = this.afs.createId();
    const quesRef: AngularFirestoreDocument<any> = this.afs.doc(`admin/`+title);
    return quesRef.update({
      status: 1
  });
  }

  EarlyQuestion(title){

    // const id = this.afs.createId();
    const quesRef: AngularFirestoreDocument<any> = this.afs.doc(`admin/`+title);
    return quesRef.update({
      status: 0
  });
  }

  ChangeQuestion(title){
    const quesRef: AngularFirestoreDocument<any> = this.afs.doc(`admin/`+title);
    return quesRef.update({
      status: 2
  });
  }

}