import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs'
import { identifierModuleUrl } from '@angular/compiler';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll;
  id;
  
  constructor(private _voteService: VoteService, private _route: ActivatedRoute) { 

    this._route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this._voteService.getThisPoll(this.id, (poll) => {
        this.poll = poll;
      })
    })
  }


// getPolls(){
//       this._voteService.getThisPoll(this.id, (poll) => {
//         this.poll = poll;
//       })
//     }
  
    ngOnInit() {
      this._voteService.polls.subscribe(
        (response)=> {this.poll = response;}
      );
    }

  }



