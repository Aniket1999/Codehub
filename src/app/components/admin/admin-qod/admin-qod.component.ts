import { Component, OnInit, NgZone } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-qod',
  templateUrl: './admin-qod.component.html',
  styleUrls: ['./admin-qod.component.css']
})
export class AdminQodComponent implements OnInit {

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
    private qodService: AdminService
  ) { }

  display(){
    console.log(this.qodService.AddQuestionToUser(this.title, this.question, this.language, this.solution,this.created));
  }

  resetForm() {
    this.title = '';
    this.question = '';
    this.language = '';
    this.solution = '';
    console.log('Resete');
  }

  ngOnInit() {
    // this.userData = JSON.parse(localStorage.getItem('user'));
    // this.uids= this.userData.uid;
    // console.log(typeof(this.uids));
  }

}
