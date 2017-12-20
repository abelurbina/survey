import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
user_name = this.user_name;
poll={
  user_name: '',
  question: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  vote1 : '',
  vote2 : '',
  vote3 : '',
  vote4 : ''
};

  constructor(private _voteService: VoteService, private router: Router) { }

  ngOnInit() {
    // this._voteService.polls.subscribe(
    //   (polls) => {this.poll = polls; }
    // );
    this.user_name = sessionStorage.getItem('username');
  }
  newPoll() {
    this.user_name = sessionStorage.getItem('username');
    this.poll.user_name = this.user_name;
    this._voteService.newPoll(this.poll);
    this.poll={
      user_name: '',
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      vote1 : '',
      vote2 : '',
      vote3 : '',
      vote4 : ''
    };
    this.router.navigateByUrl('/dashboard');
    }
    
  };
