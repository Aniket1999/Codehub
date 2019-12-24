import { Component, OnInit, NgZone } from '@angular/core';
import { DqService } from 'src/app/shared/services/dq.service';
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ques',
  templateUrl: './add-ques.component.html',
  styleUrls: ['./add-ques.component.css']
})
export class AddQuesComponent implements OnInit {

  title: string;
  question : string;
  language : string;
  solution: string;
  created;    

  userData;
  uids;


  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private quesService: DqService
  ) { }

  display(){
    console.log(this.quesService.AddQuestionToUser(this.title, this.question, this.language, this.solution,this.created, this.uids));
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.uids= this.userData.uid;
    console.log(typeof(this.uids));
  }

}
