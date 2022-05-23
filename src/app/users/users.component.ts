import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: any;
  constructor(private http: HttpClient) {
    this.getData()
  }

  ngOnInit(): void {

  }


  getData() {
    this.http.get('https://6285e473f0e8f0bb7c0b4d89.mockapi.io/Employees').subscribe((data) => {
      this.userList = data;
    })
  }
  onDelete(user: any) {
    this.http.delete(`https://6285e473f0e8f0bb7c0b4d89.mockapi.io/Employees/${user.EmployeeID}`).subscribe((data) => {
      this.getData()
      alert('deleted')
    })
  }
}
