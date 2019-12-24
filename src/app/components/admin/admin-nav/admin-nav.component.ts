import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone 
  ) { }

  ngOnInit() {
  }

}
