import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AngularFireAuth } from "@angular/fire/auth";
import { NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-ques-of-day',
  templateUrl: './ques-of-day.component.html',
  styleUrls: ['./ques-of-day.component.css']
})
export class QuesOfDayComponent implements OnInit {
  displayedColumns: string[] = ['serial','title', 'question', 'language','created'];


  dataSource;
  userData;

  modal;
  question;
  title;
  solution;
  date;
  language;
  sno;

  
  modal1;
  question1;
  title1;
  solution1;
  date1;
  language1;
  sno1;
  status;



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone, // Inject Firebase auth service
  ) {}

  getdata(title){
    // if(this.dataSource.)
    for(let i=0;i<this.dataSource.filteredData.length;i++){
      if(this.dataSource.filteredData[i].title == title){
        this.modal = this.dataSource.filteredData[i];
        this.question = this.modal.question;
        this.title = this.modal.title;
        this.solution = this.modal.solution;
        this.date = this.modal.created;
        this.language = this.modal.language;
        this.sno = this.modal.sno;
        this.status = this.modal.status;
        break;
      }

    }
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('admin'));
    let con = "admin/";
    this.afs.collection(con).valueChanges().subscribe(val => {
      this.dataSource = new MatTableDataSource(val);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      for(let i=0;i<this.dataSource.filteredData.length;i++){
        if(this.dataSource.filteredData[i].status == 1){
          this.modal = this.dataSource.filteredData[i];
          this.question = this.modal.question;
          this.title = this.modal.title;
          this.solution = this.modal.solution;
          this.date = this.modal.created;
          this.language = this.modal.language;
          this.sno = this.modal.sno;
          this.status = this.modal.status;
          break;
        }
  
      }

    });

  }

}
