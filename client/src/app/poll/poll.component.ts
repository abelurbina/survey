import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
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
  constructor(private _voteService: VoteService) { }
  
    getThisPoll(){
        // this.newFunction();
      this._voteService.getThisPoll(this.poll,'id');
      
    }
    // private newFunction() {
    //     // this._voteService.getThisPoll(params =>{params.get('id')});
    //     this._voteService.getThisPoll(params => {
    //         console.log(params.get(this.poll, 'id'));
    //     });
    // }

    ngOnInit() {
      this._voteService.polls.subscribe(
        (poll)=> {poll = poll;}
      );
      // this._voteService.getAllPolls();
    
   
  }
}

