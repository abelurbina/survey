import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user_name;

  constructor(private _voteService: VoteService, private router: Router) { }

  loginUser() {
    this._voteService.setUser(this.user_name);
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit() {
  }

}
