import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  polls;
  user_name = sessionStorage.getItem('username');
  
  constructor(private _voteService: VoteService) { }
  
  removePoll(poll, id){
    this._voteService.removePoll(poll, id);
  }

  ngOnInit() {
    this._voteService.polls.subscribe(
      (polls)=> {this.polls = polls;}
    );
    this._voteService.getAllPolls();
    this.user_name = sessionStorage.getItem('username');
  }

}
