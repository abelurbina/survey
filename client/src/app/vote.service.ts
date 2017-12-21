import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VoteService {
 user_name;
 polls = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  setUser(user_name){
    sessionStorage.setItem('username', user_name);
    console.log(sessionStorage.getItem('username'));
  }
  getUser() {
    return this.user_name;
  }
  logout(user_name){
    sessionStorage.clear()
    console.log('logout')
  }
  newPoll(poll) {
    this._http.post('/new', poll).subscribe(
      (response: any) => { }
    );
  } 

  getAllPolls(){
    console.log('getAllPolls')
    this._http.get('/all').subscribe((response: any) =>{
        this.polls.next(response);
      }
    );
  }
  removePoll(poll, id) {
    this._http.delete('/destroy/' + id).subscribe(
      (response: any[]) => {
        this.getAllPolls();
       }
    );
  }

  getThisPoll(id, callback){
    console.log('getting pll')
    this._http.get('/poll/'+ id).subscribe(
      (response) => {
        console.log(response);
        callback(response);
       }
    );
  }
  
  addOne(id){
    return this._http.put('/singlepoll', id)
  }

}
