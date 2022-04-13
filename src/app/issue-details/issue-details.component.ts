import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddIssueComponent } from '../add-issue/add-issue.component';
import * as data from "../data.json"

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {

  rows: any[]=[]
  headers:string[]=['id','projectName','title','priority','added','lastUpdated','action'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMockData()
  }

  updateIssue(element:any){
    this.dialog.open(AddIssueComponent,{
      width:"30%",
      data:element
    })
  }

  deleteIssue(id:number){
    this.rows=[]
    this.rows.forEach(element => {
      if (id!=element.id){
        this.rows.push(element)
        // console.log(element)
      }
      
    });
  }

  getMockData(){
    const datajson=JSON.parse(JSON.stringify(data)).default;

    datajson.forEach((element: any) => {

      this.rows.push(element)
      // this.dataSource.push(element)
      
    });
  }

}
