import { Component } from '@angular/core';
import { OnInit, OnDestroy} from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularfirebase-authentication';
  dateStart;
  ngOnInit() {

    this.dateStart =  Date(); //or New Date()
    console.log(this.dateStart);
 }

 ngOnDestroy() { 
    let period = moment.utc(moment(this.dateStart).diff(moment())).format("HH:mm:ss");
 }

}
