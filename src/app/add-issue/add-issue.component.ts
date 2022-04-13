import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {

  temp:any[]=[];

  addedIssueList:any[]=[];

  priorityList=["High", "Medium", "Low"]
  addIssueForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public updatedata : any,
    private dialogref:MatDialogRef<AddIssueComponent>) { }

    actionButton:string="Save"

  ngOnInit(): void {
    this.addIssueForm=this.formBuilder.group({
      id: this.getRandomInt(1, 100),
      projectName:['',Validators.required],
      title:['',Validators.required],
      description:['',Validators.required],
      priority:['',Validators.required],
      added: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      lastUpadted: formatDate(new Date(), 'yyyy-MM-dd', 'en')
    })


    if(this.updatedata){
      this.actionButton="Update"
      this.addIssueForm.controls['id'].setValue(this.updatedata.id)
      this.addIssueForm.controls['projectName'].setValue(this.updatedata.projectName)
      this.addIssueForm.controls['title'].setValue(this.updatedata.title)
      this.addIssueForm.controls['description'].setValue(this.updatedata.description)
      this.addIssueForm.controls['priority'].setValue(this.updatedata.priority)
      this.addIssueForm.controls['added'].setValue(this.updatedata.added)
      this.addIssueForm.controls['lastUpdated'].setValue(this.updatedata.lastUpdated)
    }
  }
  addIssue(){
    if (!this.updatedata){
      this.temp.push(this.addIssueForm.value)
      this.addedIssueList.push(this.temp)
    }else{
      this.updateIssue()
    }
    console.log("Product added", this.addIssueForm.value)
  }

  updateIssue(){

  }
  getRandomInt(min: number, max: number):number{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max - min +1))+min;
  }
  
}


