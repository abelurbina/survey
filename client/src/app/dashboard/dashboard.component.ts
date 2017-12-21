import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
import { Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  polls;
  user_name = sessionStorage.getItem('username');
  
  constructor(private _voteService: VoteService, private _router: Router) { }
  
  logout(){
    this._voteService.logout('user_name')
    this._router.navigateByUrl('/');
    
  }
  // addOne(){
  //   this._voteService.addOne()

  // }

  removePoll(poll, id){
    this._voteService.removePoll(poll, id);
  }

  ngOnInit() {
     if (this.user_name == null){
      this._router.navigateByUrl('/');
      }

    this._voteService.polls.subscribe(
      (polls)=> {this.polls = polls;}
    );
    this._voteService.getAllPolls();
    this.user_name = sessionStorage.getItem('username');
  }
}
