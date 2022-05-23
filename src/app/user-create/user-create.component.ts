import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userFrom: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.userFrom = new FormGroup({
      'FirstName': new FormControl(''),
      'LastName': new FormControl(''),
      'Email': new FormControl(''),
      'Salary': new FormControl('')
    });
  }

  ngOnInit(): void { }
  reload($myParam: string = ''): void {
    const navigationDetails: string[] = ['/users'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails)
  }

  postData() {
    //console.log(this.userFrom.value)
    this.http.post('https://6285e473f0e8f0bb7c0b4d89.mockapi.io/Employees', this.userFrom.value).subscribe((data) => {
      alert('Data posted successfully');
      this.reload()
    })

  }

}
