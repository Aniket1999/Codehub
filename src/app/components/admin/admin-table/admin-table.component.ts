import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { AngularFireAuth } from "@angular/fire/auth";
import { NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from "../../../shared/services/admin.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {

  displayedColumns: string[] = ['serial','title', 'question', 'language','created','status'];
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

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    public authService: AdminService,
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
    // this.uids= this.userData.uid;
    let con = "admin/" ;
    this.afs.collection(con).valueChanges().subscribe(val => {
      this.dataSource = new MatTableDataSource(val);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }
}
 