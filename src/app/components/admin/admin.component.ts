import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { AngularFireAuth } from "@angular/fire/auth";
import { NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from "../../shared/services/admin.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['serial','title', 'question', 'language','created'];
  dataSource;
  userData;
  uids;

  modal;
  question;
  title;
  solution;
  date;
  language;
  sno;
  status;

  disptitle;
  // isdisptitle = false;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    // public authService: AdminService,
    private qodService: AdminService,
    public router: Router,
    public ngZone: NgZone, // Inject Firebase auth service
  ) {}
 
  publishother(title){
      console.log(title);
      this.qodService.ChangeQuestion(title);
      var s = this.dataSource.filteredData.length;
      var ss = this.dataSource.filteredData;
      var f=0;
        for (var i = 0; i < s; i++) {
          if(ss[i].status == 2)
          {
            f++;
          }
        }
        if(f==(s-1)) {
          for (var i = 0; i < s; i++) {
            if(ss[i].status == 2)
           {
            this.qodService.EarlyQuestion(ss[i].title);
           }
          }
        }
  }

  publish()
  { 
    var s = this.dataSource.filteredData.length;
    var ss = this.dataSource.filteredData;
     for (var i = 0; i < s; i++) {
      if(ss[i].status == 0 && ss[i].status != 2)
     {
        this.disptitle=ss[i].title;
         break;
       }
    }
  }
  publishit(title){
    var s = this.dataSource.filteredData.length;
     for (var i = 0; i < s; i++) {
      var ss = this.dataSource.filteredData;
      if(ss[i].title==title)
     {
         this.qodService.UpdateQuestion(ss[i].title);
         break;
       }
    }
    for (var i = 0; i < s; i++) {
      if(ss[i].status == 2)
     {
      this.qodService.EarlyQuestion(ss[i].title);
     }
    }
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('admin'));
    let con = "admin/" ;
    this.afs.collection(con).valueChanges().subscribe(val => {
      this.dataSource = new MatTableDataSource(val);  
    });
  }
}
