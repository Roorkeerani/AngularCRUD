import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  

  empForm : FormGroup;
  userList: any;
  constructor(private http: HttpClient) {
    this.getUser()
    this.empForm = new FormGroup({
      'firstName': new FormControl(''),
      'lastName' : new FormControl(''),
      'email': new FormControl(''),

      'salary': new FormControl('')
    });
  }
  getUser(){
    this.http.get('https://6285e473f0e8f0bb7c0b4d89.mockapi.io/Employees').subscribe((data) => {
      this.userList = data;
    })
  }
  deleteUser(user:any){
    console.log(user)
    this.http.delete(`https://6285e473f0e8f0bb7c0b4d89.mockapi.io/Employees/${user.EmployeeID}`).subscribe((data) => {
      this.getUser()
      alert("User Deleted")
    })
  }
  ngOnInit(): void {
    
  }
  postData() {
    console.log(this.empForm.value)
    console.log("hello")
    this.http.post('https://6285e473f0e8f0bb7c0b4d89.mockapi.io/Employees', this.empForm.value).subscribe((data) => {
      alert('Data posted successfully');
   })

  }
}
