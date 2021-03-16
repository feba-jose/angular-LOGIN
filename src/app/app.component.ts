import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-login';
  people:any;
  constructor(private http: HttpClient) {

  }  ngOnInit(){
    // let resp=this.http.get("http://localhost:3005/people")
    // resp.subscribe((data)=>this.people=data)
    // console.log(this.people);
  }


}
