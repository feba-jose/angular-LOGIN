import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  people:any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(){
  }
  getData(){
    let resp=this.http.get("http://localhost:3005/people")
    resp.subscribe((data)=>this.people=data)
    console.log(this.people);

  }

}
